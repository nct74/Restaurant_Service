#include "StackFrame.h"
#include <iostream>
#include <fstream>
#include "errors.h"
#include "constants.h"
#include <string.h>
using namespace std;

bool StackFrame::IsTypeMissMatchError(int Op_type, int type){
    if(Op_type == type)return false;
    else {
        TypeMisMatch miss(lineCheck);
        cout<<miss.what();
        IsError = 1;
        return true;
    }
}

bool StackFrame::IsDividedByZeroError(){
    DivideByZero zero(lineCheck);
    cout<<zero.what();
    IsError = 1;
    return true;
}

bool StackFrame::IsStackFullError(){
    if(OpStack.count > opStackMaxSize - 2){
        StackFull full(lineCheck);
        cout<<full.what();
        IsError = 1;
        return true;
    }
    return false;
}

bool StackFrame::IsStackEmptyError(){
    if(OpStack.count <= 1){
        StackEmpty empty(lineCheck);
        cout<<empty.what();
        IsError = 1;
        return true;
    }
    return false;
}

bool StackFrame::IsArrayOutofRangeError(int idx){
    if(idx > localVarArrSize){
        ArrayOutOfRange out(lineCheck);
        cout<<out.what();
        IsError = 1;
        return true;
    }
    return false;
}

bool StackFrame::IsUndefinedVariableError(int idx){
    if(countofLocal < idx){
        UndefinedVariable unde(lineCheck);
        cout<<unde.what();
        IsError = 1;
        return true;
    }
    return false;
}

void createOperandStack(OperandStack &s){
    s.head = s.tail = NULL;
    s.count = 0;
}

Node* newNode(Value data){
    Node *tmp = new Node;
    tmp->data = data;
    tmp->next = NULL;
    return tmp;
}

Value get(OperandStack s, int idx){
    Node * tmp = s.head;
	while (idx > 0 && tmp) {
		tmp = tmp->next;
		idx--;
	}
	return tmp->data;
}

void push_element(OperandStack &s, Value data){
    Node *tmp = newNode(data);
    if(s.head == NULL || s.count == 0){
        s.head = s.tail = tmp;
    }
    else {
        s.tail->next = tmp;
        s.tail = tmp;
    }
    s.count++;
}

void pushOperandStack(OperandStack &s, Value data, int data_code){
    push_element(s,data);
    Value code;
    code.iValue = data_code;
    push_element(s,code);
}

void delete_element(OperandStack &s, int idx){
    if(s.count  > 0) {
        Value result;
        if(idx == 0){
            result = s.head->data;
            if(s.count == 1){
                s.head = s.tail = NULL;
            }
            else if (s.count > 1)
            {
                s.head = s.head->next;
            }
        }
        else {
            Node *pre = s.head;
            for(int i = 0 ; i < idx - 1 ; i++){
                pre = pre->next;
            }
            if (idx == s.count - 1){
                result = s.tail->data;
                pre->next = NULL;
                s.tail = pre;
            }
            else {
                result = pre->next->data;
                pre->next = pre->next->next;
            }
        }
        s.count--;
    }
}

void popOperandStack(OperandStack &s){
    delete_element(s,s.count-1);
    delete_element(s,s.count-1);
}

Value topOperandStack(OperandStack s){
    Node *tmp = s.head;
    for(int i = 0 ; i < s.count - 2; i++)tmp = tmp->next;
    return tmp->data;
}

StackFrame::StackFrame() : opStackMaxSize(OPERAND_STACK_MAX_SIZE), localVarArrSize(LOCAL_VARIABLE_ARRAY_SIZE), codeLoadIndex(0), countofLocal(0){
    createOperandStack(OpStack);
    lineCheck = 0;
    IsError = 0;
}

char *StringtoChar(string instruction){
        char *cstr = new char[instruction.length()+1];
        strcpy(cstr, instruction.c_str());
        return cstr;        
}

void StackFrame::run(std::string filename) {
    fstream f;
    f.open(filename.c_str(), ios::in);
    string line;
    while (!f.eof()){
	    getline(f, line);
        load(line);
    }
    execute();
}

void StackFrame::load(string instruction){
    Instruction ins;
    char *cstr = StringtoChar(instruction);
    char *tok = strtok(cstr, " ");
    ins.code = string(tok);
    if(tok != NULL){
            tok = strtok(NULL," ");
            if(tok!= NULL)ins.Op = string(tok);
    }
    codeMemory[codeLoadIndex++] = ins;
}

void StackFrame::execute(){
    for(int i = 0 ; i < codeLoadIndex && IsError == 0; i++){
        Instruction ins = codeMemory[i];
        lineCheck++;
        if(ins.code == "iconst") this->iconst(ins.Op);
        else if(ins.code == "iload")this->iload(ins.Op);
        else if(ins.code == "istore")this->istore(ins.Op);
        else if(ins.code == "fconst") this->fconst(ins.Op);
        else if(ins.code == "fload")this->fload(ins.Op);
        else if(ins.code == "fstore")this->fstore(ins.Op);
        else if(ins.code == "top") this->top();
        else if(ins.code == "iadd")this->iadd();
        else if(ins.code == "fadd")this->fadd();
        else if(ins.code == "imul")this->imul();
        else if(ins.code == "isub")this->isub();
        else if(ins.code == "idiv")this->idiv();
        else if(ins.code == "fmul")this->fmul();
        else if(ins.code == "fsub")this->fsub();
        else if(ins.code == "fdiv")this->fdiv();
        else if(ins.code == "irem") this->irem();
        else if(ins.code == "ineg")this->ineg();
        else if(ins.code == "fneg")this->fneg();
        else if(ins.code == "iand")this->iand();
        else if(ins.code == "ior")this->ior();
        else if(ins.code == "ieq")this->ieq();
        else if(ins.code == "feq")this->feq();
        else if(ins.code == "ineq")this->ineq();
        else if(ins.code == "fneq")this->fneq();
        else if(ins.code == "ilt")this->ilt();
        else if(ins.code == "flt")this->flt();
        else if(ins.code == "igt")this->igt();
        else if(ins.code == "fgt")this->fgt();
        else if(ins.code == "ibnot")this->ibnot();
        else if(ins.code == "val")this->val(ins.Op);
        else if(ins.code == "i2f")this->i2f();
        else if(ins.code == "f2i")this->f2i();
    }
}

bool get2_Operand(Value &val1, Value &val2, OperandStack &s, int type, int line){
    if(s.count >= 4) {
        val2 = get(s,s.count - 2);
        int type2 = get(s,s.count - 1).iValue;
        popOperandStack(s);
        
        val1 = get(s,s.count - 2);
        int type1 = get(s,s.count - 1).iValue;
        popOperandStack(s);
        if(type1 != type || type2 != type ){
            TypeMisMatch miss(line);
            cout<<miss.what();       
            return false;
        }
        return true;
    }
    else {
        StackEmpty emp(line);
        cout<<emp.what();
        return false;
    }
}

void StackFrame::iadd(){
    Value Op1,Op2;
    if(get2_Operand(Op1,Op2,OpStack, 0, lineCheck)){
        Value Result;
        Result.iValue = Op1.iValue + Op2.iValue;
        pushOperandStack(OpStack,Result,0);
    }
    else {
        IsError = 1;
    }
}

void StackFrame::fadd(){
    Value Op1,Op2;
    if(get2_Operand(Op1,Op2,OpStack, 1, lineCheck)){
        Value Result;
        Result.fValue = Op1.fValue + Op2.fValue;
        pushOperandStack(OpStack,Result,1);
    }
    else {
        IsError = 1;
    }
}

void StackFrame::isub(){
    Value Op1, Op2;
    if(get2_Operand(Op1, Op2, OpStack, 0, lineCheck)){
        Value Result;
        Result.iValue = Op1.iValue - Op2.iValue;
        pushOperandStack(OpStack, Result,0);
    }
    else {
        IsError = 1;
    }
}

void StackFrame::fsub(){
    Value Op1, Op2;
    if(get2_Operand(Op1, Op2, OpStack, 1, lineCheck)){
        Value Result;
        Result.fValue = Op1.fValue - Op2.fValue;
        pushOperandStack(OpStack, Result,1);
    }
    else {
        IsError = 1;
    }
}

void StackFrame::imul(){
    Value Op1,Op2;
    if(get2_Operand(Op1,Op2,OpStack, 0, lineCheck)){
        Value Result;
        Result.iValue = Op1.iValue * Op2.iValue;
        pushOperandStack(OpStack,Result,0);
    }
    else {
        IsError = 1;
    }
}

void StackFrame::fmul(){
    Value Op1, Op2;
    if(get2_Operand(Op1, Op2, OpStack, 1, lineCheck)){
        Value Result;
        Result.fValue = Op1.fValue * Op2.fValue;
        pushOperandStack(OpStack, Result, 1);
    }
    else {
        IsError = 1;
    }
}

void StackFrame::idiv(){
    Value Op1,Op2;
    if(get2_Operand(Op1,Op2,OpStack, 0, lineCheck)){
        if(Op2.iValue == 0){
            IsDividedByZeroError();
        }
        else {
            Value Result;
            Result.iValue = Op1.iValue / Op2.iValue;
            pushOperandStack(OpStack,Result, 0);
        }
    }
    else {
        IsError = 1;
    }
}

void StackFrame::fdiv(){
    Value Op1, Op2;
    if(get2_Operand(Op1, Op2, OpStack, 1, lineCheck)){
        if(Op2.fValue == 0){
            IsDividedByZeroError();
        }
        else {
            Value Result;
            Result.fValue = Op1.fValue / Op2.fValue;
            pushOperandStack(OpStack, Result,1);
        }
    }
    else {
        IsError = 1;
    }
}

void StackFrame::irem(){
    Value Op1,Op2;
    if(get2_Operand(Op1,Op2,OpStack, 0, lineCheck)){
        if(Op2.iValue == 0){
            IsDividedByZeroError();
        }
        else {
            Value Result;
            Result.iValue = Op1.iValue - (Op1.iValue / Op2.iValue) * Op2.iValue;
            pushOperandStack(OpStack,Result,0);
        }
    }
    else {
        IsError = 1;
    }
}

void StackFrame::ineg(){
    if(!IsStackEmptyError()){
        int type = OpStack.tail->data.iValue;
        if(!IsTypeMissMatchError(type, 0)){
            Value result = topOperandStack(OpStack);
            popOperandStack(OpStack);
            result.iValue = 0 - result.iValue;
            pushOperandStack(OpStack,result,0);
        }
    }
    else {
        IsError = 1;
    }
}

void StackFrame::fneg(){
    if(!IsStackEmptyError()){
        int type = OpStack.tail->data.iValue;
        if(!IsTypeMissMatchError(type, 1)){
            Value result = topOperandStack(OpStack);
            popOperandStack(OpStack);
            result.fValue = 0 - result.fValue;
            pushOperandStack(OpStack,result, 1);
        }
    }
    else {
        IsError = 1;
    }
}

void StackFrame::iand(){
    Value Op1, Op2;
    if(get2_Operand(Op1, Op2, OpStack, 0, lineCheck)){
        Value Result;
        Result.iValue = Op1.iValue & Op2.iValue;
        pushOperandStack(OpStack,Result,0);
    }
    else {
        IsError = 1;
    }
}

void StackFrame::ior(){
    Value Op1, Op2;
    if(get2_Operand(Op1, Op2, OpStack, 0, lineCheck)){
        Value Result;
        Result.iValue = Op1.iValue | Op2.iValue;
        pushOperandStack(OpStack,Result,0);
    }
    else {
        IsError = 1;
    }
}

void StackFrame::ieq(){
    Value Op1, Op2;
    if(get2_Operand(Op1, Op2, OpStack, 0, lineCheck)){
        Value Result;
        Result.iValue = (Op1.iValue == Op2.iValue);
        pushOperandStack(OpStack,Result,0);
    }
    else {
        IsError = 1;
    }
}

void StackFrame::feq(){
    Value Op1, Op2;
    if(get2_Operand(Op1, Op2, OpStack, 1, lineCheck)){
        Value Result;
        Result.iValue = (Op1.fValue == Op2.fValue);
        pushOperandStack(OpStack,Result,0);
    }
    else {
        IsError = 1;
    }
}

void StackFrame::ineq(){
    Value Op1, Op2;
    if(get2_Operand(Op1, Op2, OpStack, 0, lineCheck)){
        Value Result;
        Result.iValue = (Op1.iValue != Op2.iValue);
        pushOperandStack(OpStack,Result,0);
    }
}

void StackFrame::fneq(){
    Value Op1, Op2;
    if(get2_Operand(Op1, Op2, OpStack, 1, lineCheck)){
        Value Result;
        Result.iValue = (Op1.fValue != Op2.fValue);
        pushOperandStack(OpStack,Result,0);
    }
    else {
        IsError = 1;
    }
}

void StackFrame::ilt(){
    Value Op1, Op2;
    if(get2_Operand(Op1, Op2, OpStack, 0, lineCheck)){
        Value Result;
        Result.iValue = (Op1.iValue < Op2.iValue);
        pushOperandStack(OpStack,Result,0);        
    }
    else {
        IsError = 1;
    }
}

void StackFrame::flt(){
    Value Op1, Op2;
    if(get2_Operand(Op1, Op2, OpStack, 1,lineCheck)){
        Value Result;
        Result.iValue = (Op1.fValue < Op2.fValue);
        pushOperandStack(OpStack,Result,0);
    }
    else {
        IsError = 1;
    }
}

void StackFrame::igt(){
    Value Op1, Op2;
    if(get2_Operand(Op1, Op2, OpStack, 0, lineCheck)){
        Value Result;
        Result.iValue = (Op1.iValue > Op2.iValue);
        pushOperandStack(OpStack,Result,0);
    }
    else {
        IsError = 1;
    }
}

void StackFrame::fgt(){
    Value Op1, Op2;
    if(get2_Operand(Op1, Op2, OpStack, 1, lineCheck)){
        Value Result;
        Result.iValue = (Op1.fValue > Op2.fValue);
        pushOperandStack(OpStack,Result,0);
    }
    else {
        IsError = 1;
    }
}

void StackFrame::ibnot(){
    if(!IsStackEmptyError()){
        int type = OpStack.tail->data.iValue;
        if(!IsTypeMissMatchError(type, 0)){
            Value Op1 = topOperandStack(OpStack);
            Value Result;
            Result.iValue = (Op1.iValue == 0); 
            pushOperandStack(OpStack,Result,0);
        }
    }
}

void StackFrame::iconst(string value){
    Value val;
    val.iValue = stoi(value);
    if(!IsStackFullError()) pushOperandStack(OpStack,val,0); 
}

void StackFrame::fconst(string value){
    Value val;
    val.fValue = stof(value);
    if(!IsStackFullError()) pushOperandStack(OpStack,val,1); 
}

void StackFrame::iload(string index){
    int idx = stoi(index);
    if(!IsUndefinedVariableError(idx + 1)){
        int type = localVarArr.val[idx].iValue;
        if(!IsTypeMissMatchError(type , 0)){
            if(!IsStackFullError()) pushOperandStack(OpStack,localVarArr.val[idx + 1], 0);
        }
    }
}

void StackFrame::fload(string index){
    int idx = stoi(index);
    if(!IsUndefinedVariableError(idx + 1)){
        int type = localVarArr.val[idx].iValue;
        if(!IsTypeMissMatchError(type, 1)){
            if(!IsStackFullError()) pushOperandStack(OpStack,localVarArr.val[idx + 1], 1);
        }
    }  
}

void StackFrame::istore(string index){
    if(!IsStackEmptyError()){
        int idx = stoi(index);
        int type = OpStack.head->next->data.iValue;
        if(!IsTypeMissMatchError(type , 0)) {
            if(!IsArrayOutofRangeError(idx + 1)){
                localVarArr.val[idx].iValue = 0;
                localVarArr.val[idx + 1] = get(OpStack,0);
                countofLocal += 2;
                delete_element(OpStack,0);
                delete_element(OpStack,0);
            }
        }
    }
}

void StackFrame::fstore(string index){
    if(!IsStackEmptyError()){
        int idx = stoi(index);
        int type = OpStack.head->next->data.iValue;
        if(!IsTypeMissMatchError(type, 1)){
            if(!IsArrayOutofRangeError(idx + 1)){
                localVarArr.val[idx].iValue = 1;
                localVarArr.val[idx + 1] = get(OpStack,0);
                countofLocal += 2;
                delete_element(OpStack,0);
                delete_element(OpStack,0);
            }
        }
    }
}

void StackFrame::top(){
    if(!IsStackEmptyError()){
        if(OpStack.tail->data.iValue == 0) cout<<topOperandStack(OpStack).iValue<<endl;
        else cout<<topOperandStack(OpStack).fValue;
    }
}

void StackFrame::val(string index){
    int idx = stoi(index);
    if(!IsUndefinedVariableError(idx)){
        if(localVarArr.val[idx].iValue == 0)cout<<localVarArr.val[idx + 1].iValue<<endl;
        else cout<<localVarArr.val[idx + 1].fValue<<endl;
    }
}

void StackFrame::i2f(){
    if(!IsStackEmptyError()){
        int type = OpStack.head->next->data.iValue;
        if(!IsTypeMissMatchError(type, 0)){
            Value Result;
            Result.fValue = (float)OpStack.head->data.iValue;
            if(!IsStackFullError())pushOperandStack(OpStack,Result, 1);
        }
    }
}

void StackFrame::f2i(){
    if(!IsStackEmptyError()){
        int type = OpStack.head->next->data.iValue;
        if(!IsTypeMissMatchError(type, 1)){
            Value Result;
            Result.iValue = (int)OpStack.head->data.fValue;
            if(!IsStackFullError())pushOperandStack(OpStack,Result, 0);
        }
    }
}
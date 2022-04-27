#ifndef __STACK_FRAME_H__
#define __STACK_FRAME_H__
#define MEMORY_MAX 65536

#include <string>

/*
StackFrame declaration
*/
struct Instruction {
    std::string code;
    std::string Op;
};
union Value {
    float fValue;
    int iValue;
};
struct Node {
    Value data;
    Node* next;
};
struct OperandStack {
    Node *head;
    Node *tail;
    int count;
};
struct LocalSpace {
    Value val[1000];
    int count;
};
class StackFrame {
    int opStackMaxSize;
    int localVarArrSize;
    int codeLoadIndex;
    int lineCheck;
    int IsError;
    LocalSpace localVarArr;
    int countofLocal;
    OperandStack OpStack;
    Instruction codeMemory[MEMORY_MAX];
public:
    /*
    Constructor of StackFrame
    */
    StackFrame();
    
    /*
    Run the method written in the testcase
    @param filename name of the file
    */


    void run(std::string filename);
    void load(std::string instruction);
    void execute();

    void iconst(std::string value);
    void fconst(std::string value);
    void iload(std::string idx);
    void fload(std::string idx);
    void istore(std::string idx);
    void fstore(std::string idx);
    void top();
    void val(std::string idx);
    void imul();
    void iadd();
    void isub();
    void idiv();
    void fadd();
    void fsub();
    void fmul();
    void fdiv();
    void irem();
    void ineg();
    void fneg();
    void iand();
    void ior();
    void ieq();
    void feq();
    void ineq();
    void fneq();
    void ilt();
    void flt();
    void igt();
    void fgt();
    void ibnot();

    void i2f();
    void f2i();

    bool IsTypeMissMatchError(int Op_type, int type);
    bool IsDividedByZeroError();
    bool IsStackFullError();
    bool IsStackEmptyError();
    bool IsArrayOutofRangeError(int idx);
    bool IsUndefinedVariableError(int idx);
};

#endif // !__STACK_FRAME_H__
export enum UserStatus {
    INITIALZED = 1,
    UNINITIALZED = 0,
}
export enum UserRole {
    ADMIN = 0,
    STAFF = 1,
    CUSTORMER = 2, // => Dùng để so sánh với oldUser để set roles mới ở file jwt.strategy.ts, để ý khi Guards gửi nó không có gửi roles nên phải có cái if else đó để set roles cho nó
    // Không cần if nó cũng được nhưng nên có để chặt chẽ
}

//Done set quyền

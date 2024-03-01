"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
function insertUser(email, username, password, firstName, lastName) {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield prisma.user.create({
            data: {
                username,
                password,
                firstName,
                lastName,
                email,
            }
        });
        console.log(res);
    });
}
function getUsers() {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield prisma.user.findMany();
        console.log(res);
        return res;
    });
}
getUsers();
function updateUser(username, { firstName, lastName }) {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield prisma.user.update({
            where: {
                username: username,
            },
            data: {
                firstName,
                lastName,
            }
        });
        console.log(res);
        return res;
    });
}
// insertUser("you4@gmail.com","admin4", "123456", "Shoaib", "Shah")
// insertUser("super@gmail.com","admin2", "123456", "shahid", "gillani")
// updateUser("admin1",{firstName:"Khalid", lastName:"Khan"})
function getUser(username) {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield prisma.user.findUnique({
            where: {
                username
            }
        });
        console.log(res);
        return res;
    });
}
// getUser("admin2")

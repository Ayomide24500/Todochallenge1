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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllCombine = exports.getAllTask = exports.moveTodoToDone = exports.moveTodoToProgress = exports.createTodo = void 0;
const TodoModel_1 = __importDefault(require("../model/TodoModel"));
const createTodo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { title } = req.body;
        const createTask = yield TodoModel_1.default.create({ title });
        return res.status(201).json({
            message: "todo task created successfully",
            data: createTask,
        });
    }
    catch (error) {
        return res.status(201).json({
            message: "error creating todo task",
        });
    }
});
exports.createTodo = createTodo;
const moveTodoToProgress = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { ID } = req.params;
        const findTask = yield TodoModel_1.default.findById(ID);
        if (findTask) {
            const createTask = yield TodoModel_1.default.findByIdAndUpdate(ID, { progress: true }, { new: true });
            return res.status(201).json({
                message: "todo task created successfully",
                data: createTask,
            });
        }
        else {
            return res.status(201).json({
                message: "error finding task",
            });
        }
    }
    catch (error) {
        return res.status(201).json({
            message: "error creating todo task",
        });
    }
});
exports.moveTodoToProgress = moveTodoToProgress;
const moveTodoToDone = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { ID } = req.params;
        const findTask = yield TodoModel_1.default.findById(ID);
        if (findTask === null || findTask === void 0 ? void 0 : findTask.progress) {
            const createTask = yield TodoModel_1.default.findByIdAndUpdate(ID, { done: true }, { new: true });
            return res.status(201).json({
                message: "todo task created successfully",
                data: createTask,
            });
        }
        else {
            return res.status(201).json({
                message: "error finding task",
            });
        }
    }
    catch (error) {
        return res.status(201).json({
            message: "error creating todo task",
        });
    }
});
exports.moveTodoToDone = moveTodoToDone;
const getAllTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const getall = yield TodoModel_1.default.find();
        return res.status(201).json({
            message: "todo task created successfully",
            data: getall,
        });
    }
    catch (error) {
        return res.status(201).json({
            message: "error creating todo task",
        });
    }
});
exports.getAllTask = getAllTask;
const getAllCombine = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const getTask = yield TodoModel_1.default.find();
        const getAllTask = getTask.filter((el) => {
            return el.progress === false && el.done === false;
        });
        const getAllProgress = getTask.filter((el) => {
            return el.progress === true && el.done === false;
        });
        const getAllDone = getTask.filter((el) => {
            return el.progress === true && el.done === true;
        });
        let data = {
            task: getAllTask,
            progress: getAllProgress,
            done: getAllDone,
        };
        return res.status(201).json({
            message: "todo task created successfully",
            data: data,
        });
    }
    catch (error) {
        return res.status(201).json({
            message: "error creating todo task",
        });
    }
});
exports.getAllCombine = getAllCombine;
// const TodoModel = new Schema<iPropsData>(
//   {
//     todo: {
//       type: [],
//     },
//     progress: {
//       type: [],
//     },
//     done: {
//       type: [],
//     },
//   },
//   { timestamps: true }
// );

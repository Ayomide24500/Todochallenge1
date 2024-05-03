import { Request, Response } from "express";
import TodoModel from "../model/TodoModel";
import { iProps } from "../model/TodoModel";

export const createTodo = async (req: Request, res: Response) => {
  try {
    const { title } = req.body;

    const createTask = await TodoModel.create({ title });

    return res.status(201).json({
      message: "todo task created successfully",
      data: createTask,
    });
  } catch (error) {
    return res.status(201).json({
      message: "error creating todo task",
    });
  }
};

export const moveTodoToProgress = async (req: Request, res: Response) => {
  try {
    const { ID } = req.params;

    const findTask = await TodoModel.findById(ID);

    if (findTask) {
      const createTask = await TodoModel.findByIdAndUpdate(
        ID,
        { progress: true },
        { new: true }
      );
      return res.status(201).json({
        message: "todo task created successfully",
        data: createTask,
      });
    } else {
      return res.status(201).json({
        message: "error finding task",
      });
    }
  } catch (error) {
    return res.status(201).json({
      message: "error creating todo task",
    });
  }
};

export const moveTodoToDone = async (req: Request, res: Response) => {
  try {
    const { ID } = req.params;

    const findTask = await TodoModel.findById(ID);

    if (findTask?.progress) {
      const createTask = await TodoModel.findByIdAndUpdate(
        ID,
        { done: true },
        { new: true }
      );
      return res.status(201).json({
        message: "todo task created successfully",
        data: createTask,
      });
    } else {
      return res.status(201).json({
        message: "error finding task",
      });
    }
  } catch (error) {
    return res.status(201).json({
      message: "error creating todo task",
    });
  }
};

export const getAllTask = async (req: Request, res: Response) => {
  try {
    const getall = await TodoModel.find();

    return res.status(201).json({
      message: "todo task created successfully",
      data: getall,
    });
  } catch (error) {
    return res.status(201).json({
      message: "error creating todo task",
    });
  }
};

export const getAllCombine = async (req: Request, res: Response) => {
  try {
    const getTask = await TodoModel.find();

    const getAllTask = getTask.filter((el: iProps) => {
      return el.progress === false && el.done === false;
    });

    const getAllProgress = getTask.filter((el: iProps) => {
      return el.progress === true && el.done === false;
    });

    const getAllDone = getTask.filter((el: iProps) => {
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
  } catch (error) {
    return res.status(201).json({
      message: "error creating todo task",
    });
  }
};

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

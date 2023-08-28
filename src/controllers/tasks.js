import { TaskModel } from '../models/task.js'
import 'colors'

export class TaskController {
  static async getAll ({ completed }) {
    const tasks = await TaskModel.getAll({ completed })

    return tasks
  }

  static async printAll ({ completed }) {
    const tasks = await TaskModel.getAll({ completed })

    tasks.forEach((task, i) => {
      const { description, completedDate } = task
      const index = `${i + 1}.`.green
      const status = completedDate ? 'completed'.green : 'pending'.red

      console.log(`${index} ${description} :: ${status}`)
    })
  }

  static async getById ({ id }) {
    const task = await TaskModel.getById({ id })

    return task
  }

  static async create ({ description }) {
    await TaskModel.create({ description })
  }

  static async complete ({ id }) {
    const input = {
      completedDate: Date.now()
    }

    const task = TaskModel.update({ id, input })

    return task
  }

  static async delete ({ id }) {
    const deleted = await TaskModel.delete({ id })

    return deleted
  }
}

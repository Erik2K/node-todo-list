import { randomUUID } from 'node:crypto'
import { readJSON, writeJSON } from '../utils/json-utils.js'

const tasks = readJSON('../../database/data.json')

export class TaskModel {
  static async getAll ({ completed }) {
    if (completed) {
      return tasks.filter(task => task.completedDate)
    }

    if (completed === false) {
      return tasks.filter(task => !task.completedDate)
    }

    return tasks
  }

  static async getById ({ id }) {
    const task = tasks.find(task => task.id === id)

    return task
  }

  static async create ({ description }) {
    const newTask = {
      id: randomUUID(),
      description,
      completedDate: null
    }

    tasks.push(newTask)

    writeJSON('database/data.json', tasks)

    return newTask
  }

  static async update ({ id, input }) {
    const index = tasks.findIndex(task => task.id === id)
    if (index === -1) return false

    tasks[index] = {
      ...tasks[index],
      ...input
    }

    writeJSON('database/data.json', tasks)

    return tasks[index]
  }

  static async delete ({ id }) {
    const index = tasks.findIndex(task => task.id === id)
    if (index === -1) return false

    tasks.splice(index, 1)

    writeJSON('database/data.json', tasks)

    return true
  }
}

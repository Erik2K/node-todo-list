import 'colors'
import { mainMenu, customMenu, pause, readInput, confirmation, customMultiSelectMenu } from './src/utils/inquirer-utils.js'
import { TaskController } from './src/controllers/tasks.js'

const main = async () => {
  let option = 0

  do {
    option = await mainMenu()

    switch (option) {
      case 1:
        await TaskController.create({ description: await readInput('Description: ') })
        break

      case 2:
        await TaskController.printAll({})
        break

      case 3:
        await TaskController.printAll({ completed: true })
        break

      case 4:
        await TaskController.printAll({ completed: false })
        break

      case 5:
        {
          const tasks = await TaskController.getAll({ completed: false })

          const options = await customMultiSelectMenu(tasks.map((task, i) => {
            const index = `${i + 1}.`.green

            return {
              value: task.id,
              name: `${index} ${task.description}`
            }
          }))

          options.forEach(option => {
            TaskController.complete({ id: option })
          })
        }
        break

      case 6:
        {
          const tasks = await TaskController.getAll({})

          const option = await customMenu(tasks.map((task, i) => {
            const index = `${i + 1}.`.green

            return {
              value: task.id,
              name: `${index} ${task.description}`
            }
          }))

          if (option !== 0) {
            const confirm = await confirmation('are you sure you want to delete the task ?')

            if (confirm) {
              if (TaskController.delete({ id: option })) {
                console.log('Task deleted'.green)
              } else {
                console.log('The task couldn\'t be removed'.red)
              }
            }
          }
        }
        break
    }

    await pause()
  } while (option !== 0)

  console.clear()
}

main()

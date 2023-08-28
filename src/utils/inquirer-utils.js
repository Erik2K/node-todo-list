import inquirer from 'inquirer'
import 'colors'

const menuOpts = [
  {
    type: 'list',
    name: 'option',
    message: 'Choose an option',
    choices: [
      {
        value: 1,
        name: `${'1.'.green} Create a new task`
      },
      {
        value: 2,
        name: `${'2.'.green} List all tasks`
      },
      {
        value: 3,
        name: `${'3.'.green} List completed tasks`
      },
      {
        value: 4,
        name: `${'4.'.green} List pending tasks`
      },
      {
        value: 5,
        name: `${'5.'.green} Complete task(s)`
      },
      {
        value: 6,
        name: `${'6.'.green} Remove task`
      },
      {
        value: 0,
        name: `${'0.'.green} Exit`
      }
    ]
  }
]

export const mainMenu = async () => {
  console.clear()

  console.log('========================='.green)
  console.log('  Choose an option'.white)
  console.log('=========================\n'.green)

  const { option } = await inquirer.prompt(menuOpts)

  return option
}

export const customMenu = async (options) => {
  options.unshift({
    value: 0,
    name: `${'0.'.green} Exit`
  })

  const menuOptions = [
    {
      type: 'list',
      name: 'option',
      message: 'Choose an option',
      choices: options
    }
  ]

  const { option } = await inquirer.prompt(menuOptions)

  return option
}

export const customMultiSelectMenu = async (customOptions) => {
  const menuOptions = [
    {
      type: 'checkbox',
      name: 'options',
      message: 'Check options',
      choices: customOptions
    }
  ]

  const { options } = await inquirer.prompt(menuOptions)

  return options
}

export const pause = async () => {
  const question = [
    {
      type: 'input',
      name: 'enter',
      message: `\nPress ${'ENTER'.green} to continue`
    }
  ]

  console.log('\n')
  await inquirer.prompt(question)
}

export const readInput = async (message) => {
  const question = [
    {
      type: 'input',
      name: 'input',
      message,
      validate (value) {
        if (value.length === 0) {
          return 'Please enter a value'
        }

        return true
      }
    }
  ]

  const { input } = await inquirer.prompt(question)

  return input
}

export const confirmation = async (message) => {
  const question = [
    {
      type: 'confirm',
      name: 'ok',
      message
    }
  ]

  const { ok } = await inquirer.prompt(question)

  return ok
}

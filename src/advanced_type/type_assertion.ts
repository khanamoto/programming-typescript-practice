function formatInput(input: string) {}

function getUserInput(): string | number {}

let input = getUserInput()

// inputが文字列であることを主張
// こちらを使うようにすること
formatInput(input as string)

// これと機能的に同等
formatInput(<string>input)

function addToList(list: string[], item: string) {}
addToList('this is really,' as any, 'really unsafe')

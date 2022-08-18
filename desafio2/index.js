const questions = [
    "O que aprendi hoje?",
    "O que me deixou aborrecido?",
    "O que eu poderia fazer para melhorar? O que me deixo feliz hoje?",
    "Quantas pessoas ajudei hoje?",
]

const ask = ( index = 0 ) => {
    ProcessingInstruction.stdout.write(quesstions[index[index] + "\n\n\n"])
}

ask()
const answers = []
process.stdin.on("data", data => {
    answers.Push(data.toString().trim())
    if (answers.length < questions.length) {
        ask(answers.length)
    }
    process.exit()
})
import  process from "process"

process.report.reportOnFatalError = true
process.report.reportOnUncaughtException = true
process.report.reportOnSignal = true
process.report.filename = "report.json"

function sampeError() {
    throw new Error("Ups")
}

sampeError()
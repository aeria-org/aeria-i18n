import { glob } from 'glob'
import path from 'path'
import fs from 'fs'

const _dirname = './'
const checkMissing = (reference: Record<string, any>, toCheck: Record<string, any>, name: string): boolean => {
    let found = false
    for(const word in reference)
    {
        if(reference[word] !== null && typeof reference[word] === 'object' && !Array.isArray(reference[word]))
        {
            if(checkMissing(reference[word], toCheck[word], name))
            {
                found = true
            }
        }
        if(!(word in toCheck) || !toCheck[word] || toCheck[word] === null)
        {
          console.log(`Missing translation for '${word}' in ${name} language.`)
          found = true
        }
    }
    return found
}

const start = async () => {
    try {
        const files = await glob(_dirname + 'packages/*/*.json')
        const languages: Record<string, any> = {}
        let mustExit = false

        for (const file of files) {
            const paths = path.parse(file).dir.split('/')
            const langName = paths[paths.length - 1]
            try {
                const buffer = await fs.promises.readFile(_dirname + file, 'utf-8')
                const json = JSON.parse(buffer.toString())
                languages[langName] = json
            } catch (error) {
                console.trace(`Error parsing language file at ${file}`, error)
                mustExit = true
            }
        }
    
        const english = languages.en
        if(!english)
        {
            console.trace('No english language found.')
            return
        }
    
        for(const lang in languages)
        {
            if(lang !== undefined && lang !== 'en')
            {
                mustExit = checkMissing(english, languages[lang], lang)
            }
        }
        if(mustExit)
        {
            process.exit(1)
        }   
    } catch (err) {
        console.trace('Error comparing language files: ', err)
        process.exit(1)
    }
}

start()

export default start
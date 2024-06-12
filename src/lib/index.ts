//! New for markdown-it

import markdownit from 'markdown-it'
import { emojify } from 'node-emoji'

import mdfootnote from 'markdown-it-footnote'
import mdsup from 'markdown-it-sup'
import mdsub from 'markdown-it-sub'
import mdmark from 'markdown-it-mark'
import mdhljs from 'markdown-it-highlightjs'
import mdabbr from 'markdown-it-abbr'
import mdattr from 'markdown-it-attrs'
import mdkbd from 'markdown-it-kbd'
import mdcontainer from 'markdown-it-container'

import "highlight.js/styles/atom-one-dark.css"
import '@catppuccin/highlightjs/sass/catppuccin-mocha.scss'

let dataObject = { avatar: "", email: "", author: "", date: "" }

export const md = markdownit()
    .use(mdhljs, { auto: false, inline: true })
    .use(mdattr)
    .use(mdfootnote)
    .use(mdsub)
    .use(mdsup)
    .use(mdmark)
    .use(mdabbr)
    .use(mdkbd)
    .use(mdcontainer, 'metadata', {
        validate: () => { return true }, //return params.trim() !== "metadata" && params.trim() !== "" ? true : false 
        
        render: (tokens: any, idx: any) => {
            if (tokens[idx].nesting === 1) {
                if (tokens[idx].level === 0) {
                    return `<div class="text-red flex column">`
                } else {
                    let metadata = tokens[idx].info.trim().match(/^(.+?):\s(.+?)$/)
                    if (metadata) {
                        let token = metadata[1].toLowerCase()
                        let data = metadata[2]

                        switch (token) {
                            case "author": dataObject.author = `<span>${ data }</span>`; break
                            case "avatar": dataObject.avatar = `<span>${ data }</span>`; break
                            case "date": dataObject.date = `<span>${ data }</span>`; break
                            case "email": dataObject.email = `<span>${ data }</span>`; break
                            default: break
                        }
                    }
                }
            }

            if (tokens[idx].nesting === -1 && tokens[idx].level === 0) {
                let data = `${ dataObject.avatar }${ dataObject.author }${ dataObject.date }${ dataObject.email }`
                dataObject = { avatar: "", email: "", author: "", date: "" }

                return `${ data }</div>`
            }

            return ""
        }
    })

//! Whole file needs review
import { Router } from "vue-router"
import { nanoid } from "nanoid" // FIXME Prep for removal 

// FIXME Prep for removal 
export const isCode = (line: string) => {
  return line.startsWith('`')
}

//@ ============================================================================
//@  Interfaces
//@ ============================================================================
// FIXME Prep for removal 
export interface Footnote {
  text: string
  url: string
  name: string
  shortname: string
}
// FIXME Prep for removal 
export interface IMarkdownPost {
    title: string
    author?: string
    avatar?: string
    date: string
    email?: string[]
    github?: string[]
    body: string | IMarkdownPost
    footnotes: Footnote[]
}

// FIXME Prep for removal 
export interface IMarkdownPage {
  body: string
}

//@ ============================================================================
//@  Getters
//@ ============================================================================
export const getFileContents = async (file: string) => {
  if (file !== "") {
    const data = await fetch(file)
    const datavalue = await data.text()
    return datavalue
  }

  return ""
}

// FIXME Prep for removal 
export const getFootnoteId = (footnotes: Footnote[], id: string) => {
  if (footnotes) {
    if (footnotes[parseInt(id) - 1].name) {
      return footnotes[parseInt(id) - 1].name
    }

    return ''
  }

  return ''
}

// TODO add support for table of contents generation from headings 
//@ ============================================================================
//@  Parsers
//@ ============================================================================
export const escapeHTML = (line: string, preserveSpaces: boolean = false) => {
  line = line.replace(/\`/g, '')
  line = line.replace(/\&/g, '&amp;')
  line = line.replace(/\</g, '&lt;')
  line = line.replace(/\>/g, '&gt;')

  if (preserveSpaces) {
    let leading = line.match(/^(\s+?)\S/g)
    if (leading) {
      let whitespace = leading[0].slice(0,-1)
      line = `${ '&nbsp;'.repeat(whitespace.length) }${ line.slice(whitespace.length) }`
    }
  }

  return line
}

// FIXME Prep for removal 
export const parseBlockQuote = (line: string) => {
  if (line.startsWith('>')) {
    if (line.startsWith('>{')) {
      let quoteSvg = ''
      for (const match of line.matchAll(/\>\{(.+?)\}\s(.+)?/g)) {
        switch (match[1]) {
          case 'warning':
            quoteSvg = `<svg class="icon-font2x" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M256 32c14.2 0 27.3 7.5 34.5 19.8l216 368c7.3 12.4 7.3 27.7 .2 40.1S486.3 480 472 480H40c-14.3 0-27.6-7.7-34.7-20.1s-7-27.8 .2-40.1l216-368C228.7 39.5 241.8 32 256 32zm0 128c-13.3 0-24 10.7-24 24V296c0 13.3 10.7 24 24 24s24-10.7 24-24V184c0-13.3-10.7-24-24-24zm32 224a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"/></svg>`
            return `
              <blockquote class="pl-md py-sm font-retina m-font flex row gap-sm border-none border-l-thicker border-peach text-subtext0 align-center">
                <span class="text-peach align-self-start">${ quoteSvg }</span>
                <span class="grow justify-text">${ match[2] }</span>
              </blockquote>
            `
          case 'radiation':
            quoteSvg = `<svg class="icon-font2x" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M256 64a192 192 0 1 1 0 384 192 192 0 1 1 0-384zm0 448A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM200 256c0-20.7 11.3-38.8 28-48.5l-36-62.3c-8.8-15.3-28.7-20.8-42-9c-25.6 22.6-43.9 53.3-50.9 88.1C95.7 241.5 110.3 256 128 256l72 0zm28 48.5l-36 62.4c-8.8 15.3-3.6 35.2 13.1 40.8c16 5.4 33.1 8.3 50.9 8.3s34.9-2.9 50.9-8.3c16.7-5.6 21.9-25.5 13.1-40.8l-36-62.4c-8.2 4.8-17.8 7.5-28 7.5s-19.8-2.7-28-7.5zM312 256l72 0c17.7 0 32.3-14.5 28.8-31.8c-7-34.8-25.3-65.5-50.9-88.1c-13.2-11.7-33.1-6.3-42 9l-36 62.3c16.7 9.7 28 27.8 28 48.5zm-56 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64z"/></svg>`
            return `
              <blockquote class="pl-md py-sm font-retina m-font flex row gap-sm border-none border-l-thicker border-yellow text-subtext0 align-center">
                <span class="text-yellow align-self-start">${ quoteSvg }</span>
                <span class="grow justify-text">${ match[2] }</span>
              </blockquote>
            `
          case 'danger':
            quoteSvg = `<svg class="icon-font2x" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-384c13.3 0 24 10.7 24 24V264c0 13.3-10.7 24-24 24s-24-10.7-24-24V152c0-13.3 10.7-24 24-24zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"/></svg>`
            return `
              <blockquote class="pl-md py-sm font-retina m-font flex row gap-sm border-none border-l-thicker border-red text-subtext0 align-center">
                <span class="text-red align-self-start">${ quoteSvg }</span>
                <span class="grow justify-text">${ match[2] }</span>
              </blockquote>
            `
          case 'info':
            quoteSvg = `<svg class="icon-font2x" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg>`
            return `
              <blockquote class="pl-md py-sm font-retina m-font flex row gap-sm border-none border-l-thicker border-blue text-subtext0 align-center">
                <span class="text-blue align-self-start">${ quoteSvg }</span>
                <span class="grow justify-text">${ match[2] }</span>
              </blockquote>
            `
          case 'success':
            quoteSvg = `<svg class="icon-font2x" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"/></svg>`
            return `
              <blockquote class="pl-md py-sm font-retina m-font flex row gap-sm border-none border-l-thicker border-green text-subtext0 align-center">
                <span class="text-green align-self-start">${ quoteSvg }</span>
                <span class="grow justify-text">${ match[2] }</span>
              </blockquote>
            `
          case 'question':
            quoteSvg = `<svg class="icon-font2x" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"/></svg>`
            return `
              <blockquote class="pl-md py-sm font-retina m-font flex row gap-sm border-none border-l-thicker border-mauve text-subtext0 align-center">
                <span class="text-mauve align-self-start">${ quoteSvg }</span>
                <span class="grow justify-text">${ match[2] }</span>
              </blockquote>
            `
          default:
            return `
              <blockquote class="pl-md py-xs font-retina m-font flex row gap-sm border-none border-l-thicker border-overlay1 text-overlay1 align-center">
                <span class="grow justify-text">${ match[2] }</span>
              </blockquote>
            `
        }
      }
    }

    return line.replace(/^\>\s(.+)/, `
      <blockquote class="pl-md py-xs font-retina m-font flex row gap-sm border-none border-l-thicker border-overlay1 text-overlay1 align-center">
        <span class="grow justify-text">$1</span>
      </blockquote>
    `)
  }

  return line
}

// FIXME Prep for removal 
export const parseCodeBlock = (line: string) => {
  console.log('parse code block ...', line)
}

// FIXME Prep for removal 
export const parseDate = (datestamp: number) => {
    let parsedObject = new Date(datestamp)
    return parsedObject.toISOString()
}

// FIXME Prep for removal 
// TODO add anchor link and show on hover 
// TODO add custom ID for headings 
export const parseHeadings = (line: string) => {
    if (line.startsWith('#')) {
        let symbols = line.match(/^\#+/g) || []
        let count = 0

        if (symbols.length > 0) {
            count = (symbols[0]?.match(/#/g) || []).length
            return line.replace(/^#+\s(.*)/g, `<h${ count } class="m-font">$1</h${ count }>`)
        }
    }

    return line
}

// FIXME Prep for removal 
export const parseHorizontalRule = (line: string) => {
    if (line.startsWith('---')) {
        return "<hr class='w-100 border-none border-t-thick border-dashed border-mantle m-none p-none my-lg'>"
    }

    return line
}

// FIXME Prep for removal 
export const parseImage = () => {
  console.log('lib/index.ts --> parseImage()')
}

// FIXME Prep for removal 
export const parseMetadata = (metadata: string[]) => {
    let metadataHTML: IMarkdownPost = {
        title: "",
        author: "",
        avatar: "",
        date: "",
        email: [""],
        github: [""],
        body: "",
        footnotes: []
    }

    for (const data of metadata) {
        let key = data.trim().split(': ')
        
        if (key.length > 1) {
            switch (key[0]) {
                case "title":
                    metadataHTML.title = key[1]
                    break
                case "author":
                    metadataHTML.author = key[1]
                    break
                case "avatar":
                    metadataHTML.avatar = key[1]
                    break
                case "date":
                    metadataHTML.date = parseDate(parseInt(key[1]))
                    break
                case "email":
                    let emailData = key[1].split(' ')
                    metadataHTML.email = emailData
                    break
                case "github":
                    let githubData = key[1].split(' ')
                    metadataHTML.github = githubData
                    break
                default: break
            }
        }
    }

    return metadataHTML
}

// FIXME Prep for removal 
export const parseParagraphs = (line: string) => {
  if (line !== '') {
    return `<p class="m-font">${ line }</p>`
  }

  return line
}

//@ ============================================================================
//@  Automations
//@ ============================================================================
// FIXME Prep for removal 
export const parse = async (file: string, withMetadata: boolean = false) => {
  let newHTMLArray = []
  let markdownPost: IMarkdownPost = {
    title: '',
    date: '',
    body: '',
    footnotes: []
  }

  let fileContents = await getFileContents(file)
  let markdown = ""
  
  let lines = fileContents.split('\n')

  if (withMetadata) {
    let metadataArray = []

    for (const [index, line] of lines.entries()) {
      if (line.startsWith('}')) {
        lines.splice(0, index + 1)
        break
      }
      if (!line.startsWith('{') && !line.startsWith('}')) metadataArray.push(line)
    }

    markdownPost = parseMetadata(metadataArray)
  }

  for (const line of lines) {
    if ((/^\[\^([0-9]+?)\]/gm).exec(line)) {
      for (const matches of line.matchAll(/^\[\^([0-9]+?)\]\:\s(.+?)$/gm)) {
        let id = nanoid(11)
        markdownPost.footnotes?.push({ text: matches[2], name: `${ id }`, url: `#f-${ id }`, shortname: `${ matches[1] }` })
      }
    }
  }

  let openCodeBlock = false
  let codeBlockHTML = ""
  let codeBlockLine = 1
  let markLine = false
  let highlight = []

  let openTable = false
  let tableHTML = ""

  for (const line of lines) {
    let newline = ""

    //# Process each line
    //# Check for "startsWith" triggers

    // FIXME move into callable parser method 
    // TODO Add syntax highlighting support 
    let isCodeBlock = line.startsWith('```')
    if (isCodeBlock) {
      if (openCodeBlock) {
        // Close code block
        newline = `${ codeBlockHTML }<div class="p-xxs border-none border-t-thinner border-mantle text-overlay0"></div></div>`
        codeBlockHTML = ""
        codeBlockLine = 1
        highlight = []
      } else {
        // Open code block and build highlight array
        let options = line.replace(/`{3}/, '')
        let headerHTML = ""
        if (options !== "") {
          let optionsArray = options.split(" ")
          for (const [index, option] of optionsArray.entries()) {
            switch (index) {
              case 0:
                if (option !== "") { headerHTML = `
                  <span class="text-sm px-xs py-xs flex row justify-end align-stretch gap-sm">
                    <span class="text-overlay1"><svg class="icon-font" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M192 0c-41.8 0-77.4 26.7-90.5 64H64C28.7 64 0 92.7 0 128V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64H282.5C269.4 26.7 233.8 0 192 0zm0 64a32 32 0 1 1 0 64 32 32 0 1 1 0-64zM112 192H272c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16z"/></svg></span>
                    <span class="text-peach">${ option }</span>
                  </span>
                ` }
                break
              case 1:
                let lines = option.split(',')
                for (const lineNumber of lines) {
                  let range = lineNumber.split('-')
                  if (range.length > 1) {
                    let rangeIndex = parseInt(range[0])
                    while (rangeIndex <= parseInt(range[1])) {
                      highlight.push(rangeIndex)
                      rangeIndex = rangeIndex + 1
                    }
                  } else {
                    highlight.push(parseInt(range[0]))
                  }
                }
                break
              default:
                console.log('dunno', option)
                break
            }
          }
        }

        newline = `<div class="bg-crust m-font rounded-xs border-thinner border-mantle font-mono"><div class="p-xxs border-none border-b-thinner border-mantle">${ headerHTML }</div>`
      }

      openCodeBlock = !openCodeBlock
    }

    // TODO Check for tables 
    let isTable = line.startsWith('| ')
    if (isTable) {
      if (openTable) {
        console.log('table is open')
        tableHTML = `${ tableHTML }<div>${ line }</div>`
      } else {
        console.log('table opening ...')
        tableHTML = `${ tableHTML }<div class="text-peach"><div>${ line }</div>`
        openTable = true
      }
    } else {
      if (openTable) {
        newline = `${ tableHTML }</div>`
        tableHTML = ""
        openTable = false
      }
    }

    if (openCodeBlock && newline === "") {
      if (line.startsWith('+++')) {
        codeBlockHTML = `
          ${ codeBlockHTML }
          <div class="flex row align-stretch font-mono gap-xxs border-none border-l-thick border-r-thick border-hover-blue bghover-surface0 bg-green-10">
            <span class="w-1em flex row noselect border-none border-r-thinner align-center justify-center py-xs px-sm text-sm m-none text-green border-mantle">${ markLine ? '&nbsp;' : codeBlockLine }</span>
            <span class="flex row py-xs px-xs grow align-center text-sm text-green code">${ escapeHTML(line, true).replace(/^\+{3}(.+?)/g, '<span class="noselect">+&nbsp;</span><span>$1</span>') }</span>
          </div>
        `
        markLine = false
        codeBlockLine += 1
      } else if (line.startsWith('---')) {
        codeBlockHTML = `
          ${ codeBlockHTML }
          <div class="flex row align-stretch font-mono gap-xxs border-none border-l-thick border-r-thick border-hover-blue bghover-surface0 bg-red-10">
            <span class="w-1em flex row noselect border-none border-r-thinner align-center justify-center py-xs px-sm text-sm m-none text-red border-mantle">${ markLine ? '&nbsp;' : codeBlockLine }</span>
            <span class="flex row py-xs px-xs grow align-center text-sm text-red noselect">${ escapeHTML(line, true).replace(/^\-{3}(.+?)/g, '<span>-&nbsp;</span><span>$1</span>') }</span>
          </div>
        `
        markLine = true
      } else {
        codeBlockHTML = `
          ${ codeBlockHTML }
          <div class="flex row align-stretch font-mono gap-xxs border-none border-l-thick border-r-thick border-hover-blue bghover-surface0 ${ highlight.includes(codeBlockLine) ? 'border-mauve bg-mantle' : '' }">
            <span class="w-1em flex row noselect border-none border-r-thinner align-start justify-center py-xs px-sm text-sm m-none ${ highlight.includes(codeBlockLine) ? 'text-mauve border-base' : 'border-mantle text-overlay1' }">${ codeBlockLine }</span>
            <span class="flex row py-xs px-xs grow align-center text-sm code">${ escapeHTML(line, true) }</span>
          </div>
        `
        codeBlockLine += 1
        markLine = false
      }
    } else if (!isCodeBlock && !openCodeBlock && !isTable && !openTable) {
      let isHeading = parseHeadings(line)
      if (isHeading !== line) { newline = isHeading }

      let isBlockQuote = parseBlockQuote(line)
      if (isBlockQuote !== line) { newline = isBlockQuote }

      let isHorizontalRule = parseHorizontalRule(line)
      if (isHorizontalRule !== line) { newline = isHorizontalRule }

      // Do not display footnote definitions
      if ((/^\[\^([0-9]+?)\]/gm).exec(line)) { newline = "~skip" }

      if (newline === "" && line !== "") { newline = parseParagraphs(line) }

      // TODO Check for lists (ordered, unordered, and checklist)

      //# Check for inline triggers
      // Strongly Emphasized (bold italic)
      newline = newline.replace(/`[^`]*`|\*\*\*([^*]+?)\*\*\*/g, (match) => { return isCode(match) ? match : `<strong><em>${ match.replace(/\*/g, '') }</em></strong>` })
      // Strong (bold)
      newline = newline.replace(/`[^`]*`|\*\*([^*]+?)\*\*/g, (match) => { return isCode(match) ? match : `<strong>${ match.replace(/\*/g, '') }</strong>` })
      // Emphasized (italic)
      newline = newline.replace(/`[^`]*`|\*([^*]+?)\*/g, (match) => { return isCode(match) ? match : `<em>${ match.replace(/\*/g, '') }</em>` })
      // Strikeout
      newline = newline.replace(/`[^`]*`|~~(.+?)~~/g, (match) => { return isCode(match) ? match : `<span class="strikethrough">${ match.replace(/~{2}/g, '') }</span>` })
      // TODO add superscript + subscript combo support (custom syntax TBD) 
      // Superscript 
      newline = newline.replace(/`[^`]*`|\S(\^{1}.+?\^{1}).+?/g, (match, superscript) => { return isCode(match) ? match : match.replace(superscript, `<span><sup>${ superscript.replace(/\^/g, '') }</sup></span>`) })
      // Subscript
      newline = newline.replace(/`[^`]*`|\S(~{1}.+?~{1}).+?/g, (match, subscript) => { return isCode(match) ? match : match.replace(subscript, `<span><sub>${ subscript.replace(/~/g, '') }</sub></span>`) })
      // Highlight (mark)
      newline = newline.replace(/`[^`]*`|={2}([^\s].+?)={2}/g, (match, text) => { return isCode(match) ? match : `<mark class="bg-yellow text-crust p-xxs">${ text }</mark>` })
      // Check for keyboard keys (custom syntax using `[[KEY]]`)
      newline = newline.replace(/`[^`]*`|\[\[([^\]]+?)\]\]/g, (match)=> { return isCode(match) ? match : `<kbd>${ match.replace(/\[/g, '').replace(/\]/g, '') }</kbd>` })
      // Check for footnotes 
      newline = newline.replace(/`[^`]*`|\[\^(\d+?)\]/g, (match) => { return isCode(match) ? match : `<sup><a href="#${ getFootnoteId(markdownPost.footnotes, match[2]) }" class="router text-blue" name="f-${ match[2] }">[${ match[2] }]</a></sup>` })

      // Images
      // FIXME move to dedicated parser 
      newline = newline.replace(/`[^`]*`|!\[([^\]]+?)\]\(([^\)]+?)\)/g, (match, caption, image) => {
        if (image) {
          return `
            <span class="my-lg flex column justify-center align-center" title="${ caption }">
              <img src="${ image }" class="max-w-100 rounded-xxs border-thinner border-mantle" />
              <span class="text-overlay2 text-sm mt-sm font-italic">${ caption }</span>
            </span>
          `
        }

        return match
      })

      // Hyperlinks
      // FIXME move to dedicated parser 
      newline = newline.replace(/`[^`]*`|\[([^\]]+?)\]\(([^\)]+?)\)/g, (match, text, link) => {
        if (isCode(match)) return match

        let linkContent = ""
        if (link) {
          if (link.startsWith('/') || link.startsWith('#')) {
            linkContent = `<a href="${ link }" class="text-blue underline m-xxxs">${ text }</a>`
          } else if (text.trim().startsWith('<span')) {
            linkContent = `<a href="${ link }" class="m-none p-none" target="_blank">${ text }</a>`
          } else {
            linkContent = `
              <a href="${ link }" class="text-blue m-xxxs" target="_blank">
                <span class="flex-inline align-center gap-xxs">
                  <span class="underline">${ text }</span>
                  <svg class="icon-sm" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M352 0c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9L370.7 96 201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L416 141.3l41.4 41.4c9.2 9.2 22.9 11.9 34.9 6.9s19.8-16.6 19.8-29.6V32c0-17.7-14.3-32-32-32H352zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z"/></svg>
                </span>
              </a>
            `
          }
        }

        return linkContent
      })

      // Check for inline code
      // TODO maybe add support for syntax highlighting?! 
      newline = newline.replace(/\`([a-zA-Z0-9_<>/\\!@#$%^&*():;'"?~+=.,{}\[\]\s-]+?)\`/g, (temp) => { return `<span class="rounded-xs font-mono text-sm text-subtext1 py-xxxs px-xxs mx-xxxs bg-mantle line-xxl border-thinner border-crust">${ escapeHTML(temp) }</span>` })
    
      // Emojis via emojify
      newline = emojify(newline)
    }

    //# Add to HTML array
    if (newline !== "" && newline !== "~skip") { newHTMLArray.push(newline) }
  }

  markdown = newHTMLArray.join("")
  markdownPost.body = markdown

  if (withMetadata === true) {
    return markdownPost
  } else {
    return markdown
  }
}


// TODO Review this and look to improve 
//# This function replaces dynamically generated HTML and adds in an onclick listener that extends vue-router-link 
export const linkify = (element: HTMLElement, router: Router) => {
    const links = element.getElementsByTagName('a')
  
    Array.from(links).forEach((link: HTMLAnchorElement) => {
      if (link.hostname == window.location.hostname && link.classList.contains('router')) {
        // ignore if onclick is already set
        // e.g. RouterLink
        if (link.onclick) {
          return
        }
  
        link.onclick = (event: MouseEvent) => {
          const { altKey, ctrlKey, metaKey, shiftKey, button, defaultPrevented } = event
          // ignore with control keys
          if (metaKey || altKey || ctrlKey || shiftKey) {
            return
          }
  
          // ignore when preventDefault called
          // e.g. if it's a router-link
          if (defaultPrevented) {
            return
          }
  
          // ignore right clicks
          if (button !== undefined && button !== 0) {
            return
          }
  
          // ignore if `target="_blank"`
          const linkTarget = link.getAttribute('target')
          if (linkTarget && /\b_blank\b/i.test(linkTarget)) {
            return
          }
  
          let url = null
          try {
            url = new URL(link.href)
          } catch (err) {
            return
          }
  
          const to = url.pathname
          // ignore same page links with anchors
          if (url.hash && window.location.pathname === to) {
            return
          }
  
          event.preventDefault()
          router.push(to)
        }
      } else {
        link.innerHTML = `
          <span class="flex-inline align-center gap-xxs">
            ${ link.innerText }
            <svg class="icon-sm" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M352 0c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9L370.7 96 201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L416 141.3l41.4 41.4c9.2 9.2 22.9 11.9 34.9 6.9s19.8-16.6 19.8-29.6V32c0-17.7-14.3-32-32-32H352zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z"/></svg>
          </span>
        `

        link.onclick = (event: MouseEvent) => {
          event.preventDefault()

          window.open(link.href, '_blank')
          // window.location.href = link.href
        }
      }
    })
  }

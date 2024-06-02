//! Whole file needs review
import { Router } from "vue-router"

export const isCode = (line: string) => {
  return line.startsWith('`')
}

//@ ============================================================================
//@  Interfaces
//@ ============================================================================
export interface IMarkdownPost {
    title: string
    author?: string
    avatar?: string
    date: string
    email?: string[]
    github?: string[]
    body: string | IMarkdownPost
}

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

//@ ============================================================================
//@  Parsers
//@ ============================================================================
export const escapeHTML = (line: string) => {
  line = line.replace(/\`/g, '')
  line = line.replace(/\&/g, '&amp;')
  line = line.replace(/\</g, '&lt;')
  line = line.replace(/\>/g, '&gt;')

  return line
}

export const parseBlockQuote = (line: string) => {
  if (line.startsWith('>')) {
    // TODO use regex `^\>(\s|\w+)(.+)` to split special blockquotes with syntax like `>warning lorem ipsum` 

    // let quoteSvg = `<svg class="icon-font3x" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z"/></svg>`

    // return line.replace(/^\>\s(.+)/, `
    //   <blockquote class="bg-mantle p-xxl rounded-xs font-retina m-font flex row gap-sm shadow border-thinner border-crust align-center">
    //     <span class="text-surface1 align-self-start">${ quoteSvg }</span>
    //     <span class="grow justify-text ">$1</span>
    //   </blockquote>
    // `)

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

export const parseCodeBlock = (line: string) => {
  console.log('parse code block ...')
}

export const parseDate = (datestamp: number) => {
    let parsedObject = new Date(datestamp)
    return parsedObject.toISOString()
}

// TODO add anchor link and show on hover 
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

export const parseHorizontalRule = (line: string) => {
    if (line.startsWith('---')) {
        return "<hr class='w-100 border-none border-t-thick border-dashed border-mantle m-none p-none my-lg'>"
    }

    return line
}

export const parseImage = () => {
  console.log('lib/index.ts --> parseImage()')
}

export const parseMetadata = (metadata: string[]) => {
    let metadataHTML: IMarkdownPost = {
        title: "",
        author: "",
        avatar: "",
        date: "",
        email: [""],
        github: [""],
        body: ""
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

export const parseParagraphs = (line: string) => {
  if (line !== '') {
    return `<p class="m-font">${ line }</p>`
  }

  return line
}

//@ ============================================================================
//@  Automations
//@ ============================================================================
export const parse = async (file: string, withMetadata: boolean = false) => {
  let newHTMLArray = []
  let markdownPost: IMarkdownPost = {
    title: '',
    date: '',
    body: ''
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

  let openCodeBlock = false
  let codeBlockHTML = ""
  let codeBlockLine = 1
  let highlight = []

  for (const line of lines) {
    let newline = ""

    //# Process each line
    //# Check for "startsWith" triggers
    let isCodeBlock = line.startsWith('```')
    if (isCodeBlock) {
      if (openCodeBlock) {
        newline = `${ codeBlockHTML }<div class="p-xxs border-none border-t-thinner border-mantle text-overlay0">${ codeBlockLine - 1 } total</div></div>`
        codeBlockHTML = ""
        codeBlockLine = 1
        highlight = []
      } else {
        let options = line.replace(/`{3}/, '')
        let headerHTML = ""
        if (options !== "") {
          let optionsArray = options.split(" ")
          for (const [index, option] of optionsArray.entries()) {
            switch (index) {
              case 0:
                if (option !== "") { headerHTML = `<span class="text-overlay0 text-sm px-xs py-xxxs flex row justify-end">${ option }</span>` }
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

        newline = `<div class="bg-crust m-font rounded-xs border-thinner border-mantle"><div class="p-xxs border-none border-b-thinner border-mantle">${ headerHTML }</div>`
      }

      openCodeBlock = !openCodeBlock
    }

    if (openCodeBlock && newline === "") {
      codeBlockHTML = `
        ${ codeBlockHTML }
        <div class="flex row align-stretch pr-xs font-mono bghover-mantle hover-text gap-xxs ${ highlight.includes(codeBlockLine) ? 'bg-mantle text-mauve' : '' }">
          <span class="flex row border-none border-r-thinner border-mantle align-center justify-center py-xs px-sm text-xs m-none">${ codeBlockLine }</span>
          <span class="flex row p-xxs grow align-center">${ escapeHTML(line.trim() ) }</span>
        </div>
      `
      codeBlockLine += 1
    } else if (!isCodeBlock && !openCodeBlock) {
      let isHeading = parseHeadings(line)
      if (isHeading !== line) { newline = isHeading }

      let isBlockQuote = parseBlockQuote(line)
      if (isBlockQuote !== line) { newline = isBlockQuote }

      let isHorizontalRule = parseHorizontalRule(line)
      if (isHorizontalRule !== line) { newline = isHorizontalRule }

      //# Check for paragraphs
      if (newline === "" && line !== "") { newline = parseParagraphs(line) }

      //# Check for lists (ordered, unordered, and checklist)

      //# Check for code blocks

      //# Check for inline triggers
      // Strongly Emphasized (bold italic)
      newline = newline.replace(/`[^`]*`|\*\*\*([^*]+?)\*\*\*/g, (match) => { return isCode(match) ? match : `<strong><em>${ match.replace(/\*/g, '') }</em></strong>` })
      // Strong (bold)
      newline = newline.replace(/`[^`]*`|\*\*([^*]+?)\*\*/g, (match) => { return isCode(match) ? match : `<strong>${ match.replace(/\*/g, '') }</strong>` })
      // Emphasized (italic)
      newline = newline.replace(/`[^`]*`|\*([^*]+?)\*/g, (match) => { return isCode(match) ? match : `<em>${ match.replace(/\*/g, '') }</em>` })

      //# Check for keyboard keys (custom syntax using `[[KEY]]`)
      newline = newline.replace(/`[^`]*`|\[\[([^\]]+?)\]\]/g, (match)=> { return isCode(match) ? match : `<kbd>${ match.replace(/\[/g, '').replace(/\]/g, '') }</kbd>` })

      //# Check for images

      //# Check for links

      //# Check for inline code
      // TODO maybe add support for syntax highlighting?! 
      newline = newline.replace(/\`([a-zA-Z0-9_<>/\\!@#$%^&*():;'"?~+=.,{}\[\]\s-]+?)\`/g, (temp) => { return `<span class="rounded-xs font-mono text-sm text-subtext1 p-xs bg-crust line-xxxl">${ escapeHTML(temp) }</span>` })
    }

    //# Add to HTML array
    if (newline !== "") { newHTMLArray.push(newline) }
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
// NOTE This function replaces dynamically generated HTML and adds in an onclick listener that extends vue-router-link 
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


// for (const file of siteConfig.posts) {
//     let metadata = []
//     let metadataFlag = false

//     let newHTMLArray = []
//     let newMetadata: IMarkdownPost = {
//         title: '',
//         date: '',
//         body: ''
//     }

//     const markdown = await getFileContents(file)
//     parse(file, true)
//     let test = markdown.split('\n')

//     for (const [index, line] of test.entries()) {
//         let newline = ""

//         // FIXME this is very broken for processing metadata ....
//         if (index === 0 && line.startsWith('{')) { metadataFlag = true; continue; }

//         if (metadataFlag === true && line.startsWith('}')) {
//             metadataFlag = false
//             newMetadata = parseMetadata(metadata)
//             // newHTMLArray.push(newMetadata)
//             continue
//         }
//         if (metadataFlag === true && !line.startsWith('}')) {
//             metadata.push(line)
//         } else {
//             let isHeading = parseHeadings(line)
//             if (isHeading !== line) { newline = isHeading }

//             let isBlockQuote = parseBlockQuote(line)
//             if (isBlockQuote !== line) { newline = isBlockQuote }

//             let isHorizontalRule = parseHorizontalRule(line)
//             if (isHorizontalRule !== line) { newline = isHorizontalRule }

//             // TODO FIXME All of these should be put into seperate function calls to parse EVERYTHING

//             // FIXME this is needing some consideration for <ul> tags
//             if (line.startsWith('- ')) {
//                 newline = line.replace(/^-\s(.+)/, '<li>$1</li>')
//             }

//             if (line.startsWith('![')) {
//                 let matches = line.match(/^!\[(.+?)\]\((.+?)\)/) || []
//                 if (matches.length > 0) {
//                     newline = `<div class="md-img rounded-xxs"><img src="${ matches[2] }" alt="${ matches[1] }" /><span class="text-subtext0 text-sm"><em>${ matches[1] }</em></span></div>`
//                 }
//             }

//             if (line.startsWith('[')) {
//                 let matches = line.match(/^\[(.+?)\]\((.+?)\)/) || []
//                 if (matches.length > 0) {
//                     if (matches[1].startsWith('![')) { parseImage() }
//                     else {
//                         newline = `<a href="${ matches[2] }" class="text-red m-font">${ matches[1] }</a>`
//                     }
//                 }
//             }

//             //# If line does contain a Markdown starting character, make it a content paragraph
//             if (newline === "" && line !== "") { newline = `<p class="m-font mb-xxl">${ line }</p>` }

//             //# Parse other Markdown triggers
//             newline = newline.replace(/\*\*\*([a-zA-Z0-9_\s-]+?)\*\*\*/g, '<strong><em>$1</em></strong>')
//             newline = newline.replace(/\*\*([a-zA-Z0-9_\s-]+?)\*\*/g, '<strong>$1</strong>')
//             newline = newline.replace(/\*([a-zA-Z0-9_\s-]+?)\*/g, `<em>$1</em>`)
//             newline = newline.replace(/\`([a-zA-Z0-9_\s-]+?)\`/g, `<div class="code p-md rounded-xxs font-mono text-sm m-font bg-crust">$1</div>`)

//             //# Add to HTML array
//             if (newline !== "") { newHTMLArray.push(newline) }
//         }
//     }

//     newMetadata.body = newHTMLArray.join("")
//     markdownPosts.value.push(newMetadata)
// }

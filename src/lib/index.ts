import markdownit from 'markdown-it'
import { Router } from "vue-router"

import mdfootnote from 'markdown-it-footnote'
import mdsup from 'markdown-it-sup'
import mdsub from 'markdown-it-sub'
import mdmark from 'markdown-it-mark'
import mdhljs from 'markdown-it-highlightjs'
import mdabbr from 'markdown-it-abbr'
import mdattr from 'markdown-it-attrs'
import mdkbd from 'markdown-it-kbd'
import mdcontainer from 'markdown-it-container'
import mdtasklist from 'markdown-it-task-lists'

import mdins from 'markdown-it-ins'
import mddel from 'markdown-it-del'

import "highlight.js/styles/atom-one-dark.css"
import '@catppuccin/highlightjs/sass/catppuccin-mocha.scss'

let dataObject = { avatar: "", email: "", author: "", date: "" }

export const md = markdownit({ html: true, breaks: true })
    .use(mdhljs, { auto: false, inline: true })
    .use(mdattr)
    .use(mdfootnote)
    .use(mdsub)
    .use(mdsup)
    .use(mdtasklist)
    .use(mdmark)
    .use(mdabbr)
    .use(mdkbd)
    .use(mdins)
    .use(mddel)
    .use(mdcontainer, 'metadata', {
        validate: () => { return true }, //return params.trim() !== "metadata" && params.trim() !== "" ? true : false 
        
        render: (tokens: any, idx: any) => {
            if (tokens[idx].nesting === 1) {
                if (tokens[idx].level === 0) {
                    return `<div class="flex row align-center gap-md border-none border-dashed border-b-thin border-mantle pb-md mb-md">`
                } else {
                    let metadata = tokens[idx].info.trim().match(/^(.+?):\s(.+?)$/)
                    if (metadata) {
                        let token = metadata[1].toLowerCase()
                        let data = metadata[2]

                        switch (token) {
                            case "author": dataObject.author = `<span class="text-lg">${ data }</span>`; break
                            case "avatar": dataObject.avatar = `<span class=""><img class="rounded-xxs border-thinner border-crust avatar" src="${ data }" /></span>`; break
                            case "date": let stringDate = new Date(parseInt(data)).toISOString(); dataObject.date = `<span class="text-overlay0">${ stringDate }</span>`; break
                            case "email": dataObject.email = `<span>${ data }</span>`; break
                            default: break
                        }
                    }
                }
            }

            if (tokens[idx].nesting === -1 && tokens[idx].level === 0) {
                let data = `${ dataObject.avatar }<span class="flex column">${ dataObject.author }${ dataObject.email }${ dataObject.date }</span>`
                dataObject = { avatar: "", email: "", author: "", date: "" }

                return `${ data }</div>`
            }

            return ""
        }
    })

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

//@ ============================================================================
//@  Automations
//@ ============================================================================

// TODO Review this and look to improve 
//# This function replaces dynamically generated HTML and adds in an onclick listener that extends vue-router-link 
export const linkify = (element: HTMLElement, router: Router) => {
    const links = element.getElementsByTagName('a')
  
    Array.from(links).forEach((link: HTMLAnchorElement) => {
      if (link.innerHTML.startsWith('<img')) return

      if (link.innerText.startsWith('!ref')) {
        let icon = `<svg class="icon-lg" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M579.8 267.7c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6c31.5 31.5 31.5 82.5 0 114L422.3 334.8c-31.5 31.5-82.5 31.5-114 0c-27.9-27.9-31.5-71.8-8.6-103.8l1.1-1.6c10.3-14.4 6.9-34.4-7.4-44.6s-34.4-6.9-44.6 7.4l-1.1 1.6C206.5 251.2 213 330 263 380c56.5 56.5 148 56.5 204.5 0L579.8 267.7zM60.2 244.3c-56.5 56.5-56.5 148 0 204.5c50 50 128.8 56.5 186.3 15.4l1.6-1.1c14.4-10.3 17.7-30.3 7.4-44.6s-30.3-17.7-44.6-7.4l-1.6 1.1c-32.1 22.9-76 19.3-103.8-8.6C74 372 74 321 105.5 289.5L217.7 177.2c31.5-31.5 82.5-31.5 114 0c27.9 27.9 31.5 71.8 8.6 103.9l-1.1 1.6c-10.3 14.4-6.9 34.4 7.4 44.6s34.4 6.9 44.6-7.4l1.1-1.6C433.5 260.8 427 182 377 132c-56.5-56.5-148-56.5-204.5 0L60.2 244.3z"/></svg>`
        let iconColor = 'text-blue'
        let title = link.innerText
        let url = new URL(link.href)

        const to = url.pathname
        // ignore same page links with anchors
        if (url.hash && window.location.pathname === to) {
          return
        }

        let options = link.innerText.match(/([a-zA-Z0-9]+?)\=(\"[^"]+?\")/g)
        if (options) {
          for (const option of options) {
            if (option === "!ref") continue
  
            let token = option.split('=')
            let key = token[0]
            let value = token[1].replace(/"/g, '')
  
            console.log(token, key, value)
  
            switch (key) {
              case "icon":
                switch (value) {
                  case 'paper':
                    iconColor = 'text-text'
                    icon = `<svg class="icon-lg" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M0 64C0 28.7 28.7 0 64 0H224V128c0 17.7 14.3 32 32 32H384V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64zm384 64H256V0L384 128z"/></svg>`
                    break
                  default: break
                }
                break
              case "title":
                title = value
                break
              default: break
            }
          }
        }

        link.title = title
        link.classList.add('bg-red')
        link.innerHTML = `
          <span class="bg-mantle rounded-xxs border-thinner border-surface0 border-hover-blue p-md flex row align-stretch">
            <span class="flex row align-center gap-sm ${ iconColor }">
              ${ icon }
              <span class="text-blue">${ title }</span>
            </span>
            <span class="grow"></span>
            <span class="flex row align-center text-overlay0 text-sm">${ to }</span>
          </span>
        `
        
        return
      }

      if (link.hostname === window.location.hostname && link.classList.contains('router')) {
        link.innerHTML = `
          <span class="flex-inline align-center gap-xxs text-blue underline hover-mauve">
            ${ link.innerText }
          </span>
        `

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
      } else if (link.hostname === window.location.hostname) {
        let decoration = true

        if (link.parentElement?.tagName === "SUP" || link.parentElement?.tagName === "SUB") {
          decoration = false
        }

        link.innerHTML = `
          <span class="flex-inline align-center gap-xxs text-blue ${ decoration ? 'underline' : '' } hover-mauve">
            ${ link.innerText }
          </span>
        `
      } else {
        link.innerHTML = `
          <span class="flex-inline align-center gap-xxs text-blue hover-mauve">
            <span class="underline">${ link.innerText }</span>
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

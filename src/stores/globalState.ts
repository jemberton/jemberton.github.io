import { ref } from 'vue'
import { defineStore } from 'pinia'
import { useWindowScroll, useWindowSize } from '@vueuse/core'

interface HanselGretelItem {
    name: string,
    url?: string
}

export const useGlobalState = defineStore('globalState', () => {
    const windowSize = ref(useWindowSize())
    const windowScroll = ref(useWindowScroll({ behavior: 'smooth' }))
    const hanselGretel = ref([<HanselGretelItem>{}])

    const prideRainbow = ref(new Date().getMonth() === 5)

    const navigationPanel = ref(false)
    const screenOverlayPanel = ref(false)

    // const navDrawerLeft = ref(false)
    // const navDrawerRight = ref(false)
    // const editorState = ref(false)

    // const theme = ref('catppuccinLatte')
    // const dark = ref(false)

    // const auth = ref(false)
    // const userAuth = useStorage(
    //     'userAuth',
    //     { id: 0, username: '' },
    //     localStorage,
    //     { mergeDefaults: true }
    // )

    // const coldSession = async () => {
    //     console.log('coldSession()')

    //     const request = await fetch('/api/session', {
    //         method: 'POST',
    //         headers: {
    //             "Content-Type": "application/json",
    //             "Access-Control-Allow-Credentials": 'true'
    //         },
    //         body: ''
    //     })

    //     // FIXME needs reviewed to make sure it is bulletproof 
    //     if (request.status === 200 && userAuth.value.id !== 0 && userAuth.value.username !== "") {
    //         auth.value = true
    //     } else {
    //         resetUserAuth()
    //     }
    // }

    // const authLogout = async () => {
    //     console.log('[debug] authLogout()')
    //     console.log(userAuth.value.id, userAuth.value.username)

    //     const request = await fetch('/api/logout', {
    //         method: 'POST',
    //         headers: {
    //             "Content-Type": "application/json",
    //             "Access-Control-Allow-Credentials": 'true'
    //         },
    //         body: JSON.stringify({ uid: userAuth.value.id, username: userAuth.value.username })
    //     })

    //     // switch (request.status) {
    //     //     case 200:
    //     //         console.log('SUCCESS')
    //     //         break
    //     //     default:
    //     //         console.log('FAIL')
    //     //         break
    //     // }

    //     resetUserAuth()
    // }

    // const resetUserAuth = () => {
    //     auth.value = false
    //     userAuth.value = { id: 0, username: '' }
    // }

    // const toggleTheme = () => {
    //     theme.value = dark.value === true ? 'catppuccinLatte' : 'catppuccinMocha'
    //     dark.value = !dark.value
    // }

    // return {
    //     auth,
    //     navDrawerLeft,
    //     navDrawerRight,
    //     editorState,
    //     theme,
    //     dark,
    //     userAuth,

    //     coldSession,
    //     authLogout,
    //     toggleTheme
    // }

    return {
        hanselGretel,
        navigationPanel,
        prideRainbow,
        screenOverlayPanel,
        windowScroll,
        windowSize
    }
})
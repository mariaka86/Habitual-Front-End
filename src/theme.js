import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
    styles: { colorScheme: 'orange',
        global: {
            'body': {
                bg: 'green.100'
            }
        },
        fonts:{
            body: "system-ui, sans-serif",
    heading: "Georgia, serif",
    mono: "Menlo, monospace",

        }
    }
})

export default theme
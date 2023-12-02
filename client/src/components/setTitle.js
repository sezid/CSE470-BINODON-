<<<<<<< HEAD
import { useEffect } from 'react'

export function useTitle(title) {
    useEffect(() => {
        const prevTitle = document.title
        document.title = title
        return () => {document.title = prevTitle}
    })
=======
import { useEffect } from 'react'

export function useTitle(title) {
    useEffect(() => {
        const prevTitle = document.title
        document.title = title
        return () => {document.title = prevTitle}
    })
>>>>>>> be4ece29ea09a84ee7ab4d0ef89ac3a3922309b8
}
import { useCloned } from '@vueuse/core'

const EMAIL = 'mjamoun28@gmail.com'
const FORMSPREE_ID = 'xyyrpvqa'

export async function sendMail(message: string, customerIdentity?: string): Promise<boolean> {
  try {
    const messageClone = useCloned(message)

    if (customerIdentity) {
      messageClone.cloned.value = `
        Email, Phone...
        ${messageClone.cloned.value}

        Message
        ${customerIdentity}
      `
    }

    const response = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: EMAIL,
        message: messageClone.cloned.value,
      }),
    })

    if (!response.ok)
      throw new Error('Failed to send email')

    return true
  }
  catch (error) {
    return false
  }
}

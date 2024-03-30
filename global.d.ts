declare global {
  interface Email {
    send(data: {
      SecureToken: string
      To: string
      From: string
      Subject: string
      Body: string
    }): Promise<any>
  }
}

export { }

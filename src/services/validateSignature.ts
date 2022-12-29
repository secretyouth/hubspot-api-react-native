const crypto = require('crypto-js')

/**
 *
 * @deprecated
 */
export function validateSignature(
  signature: string,
  clientSecret: string,
  requestBody: string,
  signatureVersion = 'v1',
  webhooksUrl?: string,
  webhooksMethod = 'POST',
): boolean {
  const sourceString =
    signatureVersion === 'v1' ? clientSecret + requestBody : clientSecret + webhooksMethod + webhooksUrl + requestBody

  const hash = crypto.SHA256(sourceString)

  return signature === hash
}

const { Storage } = require('@google-cloud/storage')
const projectId = process.env.PROJECT_ID
const privateKeyId = process.env.PRIVATE_KEY_ID
const privateKey = process.env.PRIVATE_KEY
const clientEmail = process.env.CLIENT_EMAIL
const clientId = process.env.CLIENT_ID
const clientCertUrl = process.env.CLIENT_CERT_URL
const bucketName = process.env.BUCKET_NAME

const storage = new Storage({
  projectId: projectId,
  credentials: {
    type: 'service_account',
    project_id: projectId,
    private_key_id: privateKeyId,
    private_key: privateKey,
    client_email: clientEmail,
    client_id: clientId,
    auth_uri: 'https://accounts.google.com/o/oauth2/auth',
    token_uri: 'https://oauth2.googleapis.com/token',
    auth_provider_x509_cert_url: 'https://www.googleapis.com/oauth2/v1/certs',
    client_x509_cert_url: clientCertUrl,
  }
})

const defaultBucket = storage.bucket(bucketName);

module.exports = {storage, defaultBucket};
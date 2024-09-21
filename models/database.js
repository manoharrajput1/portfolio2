import {connect} from 'mongoose'

const conn = async function(){await connect(process.env.MONGODB_URL)}
module.exports = conn

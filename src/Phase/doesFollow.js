const { phase } = require('./utils/init.js')
const { ethers } = require('ethers')

async function doesFollow(follower, following) {

 
        let follows =  await phase.isFollowing(follower, following)

        return follows

    
}

exports.doesFollow = doesFollow
import "dotenv/config"

import os from "node:os"

import {v2 as cloudinary} from "cloudinary"

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET,
})

// PART ONE

const path = `${os.homedir()}/Desktop/cloudinary-node-upload-pdf-demo/vcr.pdf`

const pdf = await cloudinary.uploader.upload(path, {
    folder: "cloudinary-node-upload-pdf-demo",
    use_filename: true,
    unique_filename: false,
})

console.log(pdf.url)

// PART TWO

const url = cloudinary.url("cloudinary-node-upload-pdf-demo/vcr", {
    transformation: [{page: 27}],
})

console.log(url)

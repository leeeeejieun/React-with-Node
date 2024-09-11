"use strict";

const User = require("../models/User");

// 사용자 계정과 관련된 처리 수행 (로그인, 회원가입)
const userCtrl = {
    process: {
        login : async (req, res) => {
            const user = new User(req.body);
            const response = await user.login();
            res.status(response.code).json({message: response.message});
        },
        register : async (req, res) =>{
            const user = new User(req.body);
            const response = await user.register();
            res.status(response.code).json({message: response.message});
        }
    }
};

module.exports = userCtrl;
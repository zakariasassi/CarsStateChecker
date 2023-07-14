const Admins = require("../model/Admins");
const { Sequelize } = require("sequelize");
const bcrypt = require("bcryptjs");
const { Op } = require("sequelize");
const { literal } = require("sequelize");

exports.createnewadmin = async (req, res) => {
  const { username, password, role, fullname, email } = req.body;
  if (!username || !password || !role || !fullname || !email) {
    return res.status(400).json({
      message: "الرجاء ادخال كل البيانات",
      state: 0,
    });
  }

  const usernamefind =  await Admins.findOne({
    where : {
      username : username
    }
  })


  if(usernamefind) {
    return (
      res.json({
        message : "اسم المستخدم موجود ",
        state : 0
      })
    )
  }
  try {





    const hashedPassword = await bcrypt.hash(password, 10);

    const newAdmin = await Admins.create({
      username,
      password: hashedPassword,
      role,
      fullname,
      email,
    });

    if (newAdmin) {
      return res.json({
        message: "تم انشاء الحساب بنجاح",
        state: 1,
      });
    } else {
      return res.status(500).json({
        message: "فشل انشاء الحساب ",
        state: 0,
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "مشكلة في النظام راحع الادارة",
      state: 0,
    });
  }



};





exports.updateadmin = async (req, res) => {
  const { username, password, role, fullname, email , id } = req.body;
  if (!username || !password || !role || !fullname || !email) {
    return res.status(400).json({
      message: "الرجاء ادخال كل البيانات",
      state: 0,
    });
  }




 
  try {





    const hashedPassword = await bcrypt.hash(password, 10);

    const newAdmin = await Admins.update({
      username,
      password: hashedPassword,
      role,
      fullname,
      email,
    },
    {
      where : {
          id : req.params.id
      }
    }
    );

    if (newAdmin) {
      return res.json({
        message: "تم تحديث الحساب بنجاح",
        state: 1,
      });
    } else {
      return res.status(500).json({
        message: "فشل تحديث الحساب ",
        state: 0,
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "مشكلة في النظام راحع الادارة",
      state: 0,
    });
  }



};


exports.loginadmin = async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.json({
      message: "الرجاء التاكد من اسم المستخدم وكلمة المرور",
      state: 0,
    });
  }

  try {
    const admin = await Admins.findOne({
      where: {
        username: username,
      },
    });

    if (!admin) {
      return res.json({
        message: "فشلت المصدافة يرجي التاكد من البيانات",
        state: 0,
      });
    }

    const isPasswordValid = await bcrypt.compare(password, admin.password);
    if (!isPasswordValid) {
      return res.json({
        message: "فشلت المصدافة يرجي التاكد من البيانات",
        state: 0,
      });
    }

    await Admins.update(
      {
        last_login: literal("CURRENT_DATE"),
      },
      {
        where: {
          id: admin.id,
        },
      }
    );

    res.json({
      message: "Authentication successful.",
      state: 1,
      user: admin,
    });
  } catch (error) {
    console.log(error);
    res.json({
      message: "مشكلة في النظام راجع الادارة",
      state: 0,
    });
  }
};

exports.getalladmins = async (req, res, next) => {
  try {
    await Admins.findAll()
      .then((data) => {
        if (data) {
          res.json({
            state: 1,
            data: data,
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  } catch (error) {
    console.log(error);
  }
};

exports.activeadmin = async (req, res, next) => {
  const { id } = req.params;

  await Admins.update(
    {
      state: 1,
    },
    {
      where: {
        id: id,
      },
    }
  )
    .then(() => {
      res.json({
        message: "تم تغيل الحساب",
        state: 1,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.restrictadmin = async (req, res, next) => {
  const { id } = req.params;

  await Admins.update(
    {
      state: 0,
    },
    {
      where: {
        id: id,
      },
    }
  )
    .then(() => {
      res.json({
        message: "تم تقييد الحساب",
        state: 1,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.deleteadmin = async (req, res) => {
  await Admins.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then(() => {
      res.json({
        message: "تم حدف الحساب",
        state: 1,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

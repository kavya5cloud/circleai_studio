// src/controllers/userController.js

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// @desc    Create a new user
// @route   POST /api/users
// @access  Public
const createUser = async (req, res) => {
  try {
    const { email, name } = req.body;

    if (!email) {
      return res.status(400).json({ error: 'Email is required' });
    }

    const newUser = await prisma.user.create({
      data: {
        email,
        name,
      },
    });

    res.status(201).json(newUser);
  } catch (error) {
    if (error.code === 'P2002') {
      return res.status(409).json({ error: 'A user with this email already exists.' });
    }
    res.status(500).json({ error: 'Something went wrong' });
  }
};

module.exports = {
  createUser,
};
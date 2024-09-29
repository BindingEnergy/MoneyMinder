const ExpenseSchema = require('../models/expenseModel'); 

exports.addExpense = async (req, res) => {
    const { userId , title, amount, category, description, date } = req.body;

    const expense = new ExpenseSchema({
        userId,
        title,
        amount,
        category,
        description,
        date
    });

    // Validating data
    try {
        if (!userId || !title || !category || !description || !date) {
            return res.status(400).json({ message: 'All fields are required!' });
        }
        if (typeof amount !== 'number' || amount <= 0) {
            return res.status(400).json({ message: 'Amount field Error' });
        }
        await expense.save();
        res.status(200).json({ message: 'Expense Recorded!' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }

    console.log(expense);
}

exports.getExpense = async (req,res)=>{
    const userId = req.query.userId;
    try {
        if(!userId){
            return res.status(400).json({message: "UserID is required !"})
        }
        const incomes = await ExpenseSchema.find({userId}).sort({createdAt: -1})
        res.status(200).json(incomes)
    } catch (error) {
        res.status(500).json({message: "Server Error"})
    }
}

exports.deleteExpense = async (req,res)=>{
    const {id} = req.params;
    console.log('deleted: ',{id});
    ExpenseSchema.findByIdAndDelete(id)
        .then((income)=>{
            res.status(200).json({message: 'Expense Deleted!'})
        })
        .catch((err)=>{
            res.status(500).json({message: "Server Error"})
        })
}
const IncomeSchema = require('../models/incomeModel'); 

exports.addIncome = async (req, res) => {
    const { title, amount, category, description, date } = req.body;

    const income = new IncomeSchema({
        title,
        amount,
        category,
        description,
        date
    });

    // Validating data
    try {
        if (!title || !category || !description || !date) {
            return res.status(400).json({ message: 'All fields are required!' });
        }
        if (typeof amount !== 'number' || amount <= 0) {
            return res.status(400).json({ message: 'Amount field Error' });
        }
        await income.save();
        res.status(200).json({ message: 'Income Recorded!' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }

    console.log(income);
}

exports.getIncomes = async (req,res)=>{
    try {
        const incomes = await IncomeSchema.find().sort({createdAt: -1})
        res.status(200).json(incomes)
    } catch (error) {
        res.status(500).json({message: "Server Error"})
    }
}

exports.deleteIncomes = async (req,res)=>{
    const {id} = req.params;
    console.log('deleted: ',{id});
    IncomeSchema.findByIdAndDelete(id)
        .then((income)=>{
            res.status(200).json({message: 'Income Deleted!'})
        })
        .catch((err)=>{
            res.status(500).json({message: "Server Error"})
        })
}
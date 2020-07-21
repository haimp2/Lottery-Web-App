
exports.checkAndGetNumber = (req, res) => {

    const { numberList, strongNum } = req.body;

    console.log(numberList, strongNum);

    const randNumList  = [];
    while (randNumList.length < 6) {
        let r = Math.floor(Math.random() * 37) + 1;
        if (randNumList.indexOf(r) === -1) randNumList.push(r);
    }
   
    const randStrongNum = Math.floor(Math.random() * 8) + 1;

    let match = JSON.stringify(numberList.sort()) === JSON.stringify(randNumList.sort()) && strongNum === randStrongNum;


    res.status(200).json({
        match: match,
        numArray : randNumList,
        strongNum: randStrongNum
    });

}
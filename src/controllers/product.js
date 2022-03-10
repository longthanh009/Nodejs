var data = [
    {id: 1 , name : "Product1"},
    {id: 2 , name : "Product2"}
];
export const List = (rep,res) =>{
    rep.json(data)
};
export const Get =(req,res) =>{
    res.json(data.find(item => item.id === req.params.id));
};
export const Upload = (req,res) =>{
    data.push(req.body)
    console.log(data);
    res.json(data)
}
export const Delete = (req,res) =>{
    res.json(data.filter(item => item.id !== req.params.id));
};
export const Update = (req,res) =>{
    const result = data.map(item => item.id === req.params.id ? req.body : item);
    res.json(data.filter(item => item.id !== req.params.id));
};
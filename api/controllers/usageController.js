const view_path = config('path.views');

function handleGet( req,res ){
    const usage_view = 'usage.html';
    res.sendFile(`${view_path}/${usage_view}`);
}

module.exports = {
    handleGet
};

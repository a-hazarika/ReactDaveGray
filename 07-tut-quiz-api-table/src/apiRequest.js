const apiRequest = async (url = '', optionsObj = null, msg = null) => {
    try{
        const response = await fetch(url, optionsObj)

        if(!response.ok) throw Error('Please reload the app')

        msg = await response.json()
    }
    catch(err)
    {
        msg = err.message
        msg = 'Please reload the app'
    }
    finally{
        console.log(msg)
        return msg;
    }
}

export default apiRequest
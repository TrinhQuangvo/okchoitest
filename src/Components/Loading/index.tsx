import './style.css'

const Loading = () => {
    return (
        <div className='bg-white flex justify-center items-center p-4 rounded-lg min-h-full'> 
            <div className="lds-dual-ring">
            </div> 
        </div>
    )
}

export default Loading
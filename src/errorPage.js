import React from 'react'
import {Link} from 'react-router-dom'

function ErrorPage() {
    return (
        <div className='errorPage'>
            <div>
                <h1>Error 404</h1>
                <button>
                    <Link to="/">Go back to home page</Link>
                </button>
            </div>
        </div>
    )
}

export default ErrorPage
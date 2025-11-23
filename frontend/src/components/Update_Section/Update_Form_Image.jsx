import React from 'react'

const Update_Form_Image = ({ image }) => {
    return (
        <>
            {
                image && (
                    <img id='image_body' src={image.photo || "https://mdbootstrap.com/img/new/avatars/8.jpg"} alt="" srcset="" style={{ width: '90px', height: '90px' }} />
                )
            }
        </>
    )
}

export default Update_Form_Image

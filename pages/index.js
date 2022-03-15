import styles from '../styles/Home.module.css'
import { PickerDropPane } from 'filestack-react'
import { useState } from 'react'
import Image from 'next/image'

export default function Home() {
  const [imageInfos, setImageInfos] = useState([]);

  return (
    <div className={styles.container}>
      <div className={styles.standardPicker}>
        <div className={styles.content}>
          <div className={styles.title}>
            Drop Pane Picker
          </div>
          <div className={styles.paragraph}>
            The library generates a drop zone and uploads the files directly to filestack 
          </div>
          <PickerDropPane
            apikey={"AddO3ocpQmihGSDBVknMhz"}
            onSuccess={() => console.log("success")}
            onUploadDone={(res) => {
                console.log(res);
                setImageInfos(imageInfos.concat({
                  'title': "Title",
                  'handle': res.filesUploaded[0].handle
                }));
                console.log(imageInfos);
              }
            }
            onError={()=>console.log("error")}
          >
            <div className="your-container"></div>
          </PickerDropPane>
        </div>
        <div className={styles.imageContainer}>
          {imageInfos.length>0 ? imageInfos.map((image, index)=>(
            <div key={index} className={styles.singleImage}>
              <Image 
                alt="test" 
                objectFit={'cover'}
                layout='fill'
                src={"https://www.filestackapi.com/api/file/" + image.handle}/>
            </div>
          )) : <div></div>}
        </div>
      </div>
    </div>
  )
}


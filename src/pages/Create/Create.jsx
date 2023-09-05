import React from "react"
import CharacterForm from "../../components/CharacterForm/CharacterForm"
import styles from "./Create.module.css"

const Create = () => {
  return (
    <div className={styles.create}>
      <CharacterForm />
    </div>
  )
}

export default Create
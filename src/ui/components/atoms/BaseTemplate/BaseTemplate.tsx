import React from 'react'
import styles from './BaseTemplate.module.css'

export interface IBaseTemplate {
    sampleText: string
}

const BaseTemplate: React.FC<IBaseTemplate> = ({ sampleText }) => {
    return (
        <div className={styles.BaseTemplate}>{sampleText}</div>
    )
}

export default BaseTemplate;
import React from 'react'
import Collapse from '../../ComponentsReact/Collapse/index'
import '../../Styles/5.Pages/Annonce.scss/Page_Annonce.scss'

function DescriptionAndEquipments({ description, equipments }) {
  return (
    <section className="box-description-equipments">
      <Collapse title="Description" content={description} />
      <Collapse title="Equipements" content={equipments} />
    </section>
  )
}

export default DescriptionAndEquipments

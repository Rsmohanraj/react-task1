import React from 'react'
import {plans,features} from '../Data'
import ReactCardPlan from './Reactcardplan';
function ReactPricingCard() {
    console.log(plans);
    console.log(features);
    return (
        <div className="container">
            <div className="row">
                
                {
                    plans.map((plan,index) => {
                        return <ReactCardPlan key ={index} plan = {plan} features={features} />
                    })
                }
              
            </div>
        </div>
    )
}

export default ReactPricingCard
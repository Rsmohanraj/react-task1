const plans = [
    {
        plan:"FREE",
        Fee:0,
        user :"Single User",
        storage :"4GB Storage",
        feature_flags:[1,1,0,0,0,0],
    },
    {
        plan:"PLUS",
        Fee:10,
        user :"5 User",
        storage :"64GB Storage",
        feature_flags:[1,1,0,0,0,0],
    },
    {
        plan:"PRO",
        Fee:15,
        user :"Unlimit User",
        storage :"4GB Storage",
        feature_flags:[1,1,1,1,1,1],
    },
   

] 
const features = ["Unlimited Public Projects","Community Access","Unlimited Private Projects","Dedicated Phone Support","Free Subdomain","Monthly Status Reports"]
export{plans,features}
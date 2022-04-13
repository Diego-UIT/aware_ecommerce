import "./featuredInfo.scss"
import { ArrowDownward, ArrowUpward } from "@material-ui/icons"
import { useEffect, useState } from "react"
import { userRequest } from "../../requestMethods"

const FeaturedInfo = () => {
    const [income, setIncome] = useState([])
    const [perc, setPerc] = useState(0);

    useEffect(() => {
        const getIncome = async () => {
          try {
            const res = await userRequest.get("orders/income");
            setIncome(res.data);
            setPerc((res.data[1].total * 100) / res.data[0].total - 100);
          } catch {}
        };
        getIncome();
      }, []);
    console.log(income)

    return (
        <div className="featured">
            <div className="featured-item">
                <span className="featured-item__title">Revanue</span>
                <div className="money-container">
                    <span className="money-container__money">${income[0]?.total}</span>
                    <span className="money-container__rate">
                        %{Math.floor(perc)}{" "}
                        {perc < 0 ? (
                        <ArrowDownward className="money-container__icon negative" />
                        ) : (
                        <ArrowUpward className="money-container__icon" />
                        )}
                    </span>
                </div>
                <span className="featured-sub">Compared to last month</span>
            </div>
        </div>
    )
}

export default FeaturedInfo
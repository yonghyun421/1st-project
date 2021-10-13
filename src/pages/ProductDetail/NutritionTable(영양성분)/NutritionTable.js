import React from 'react';
import './NutritionTable.scss';

class NutritionTable extends React.Component {
  render() {
    return (
      <div className="fieldset">
        <div className="nutritionTableHead">
          <p>제품 영양 정보</p>
          <p>영양데이터</p>
        </div>
        {/* 영양정보 데이터값 */}
        <div className="nutritionTableinfo">
          <ul>
            <li className="kcal">용량 : 1500</li>
            <li className="fat">지방 : 100</li>
            <li className="carbohydrate">탄수화물 : 150</li>
            <li className="protein">단백질 : 30</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default NutritionTable;

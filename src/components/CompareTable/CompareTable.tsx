"use client"
import React from "react"
import { useCompare } from "../../store"

const CompareTable = () => {
    const { compare } = useCompare();
    return (
        <>
            <div className="compare__product-table">
                <div className="compare-table__block">
                    <div className="compare-table__header">Тип:</div>
                    {compare.length > 0 && (
                        <div className="compare-table__body">
                            {compare.map((el: any) => {
                                return (
                                    <div className="compare-table__body_item" key={el.id}>
                                        {el.category}
                                    </div>
                                );
                            })}
                        </div>
                    )}
                </div>
                <div className="compare-table__block">
                    <div className="compare-table__header">
                        Макс. скорость до (км/ч):
                    </div>
                    <div className="compare-table__body">
                        {compare.map((el: any) => {
                            return (
                                <div className="compare-table__body_item" key={el.id}>
                                    {el.maxSpeed}
                                </div>
                            );
                        })}
                    </div>
                </div>
                <div className="compare-table__block">
                    <div className="compare-table__header">
                        Мощность двигателя:
                    </div>
                    <div className="compare-table__body">
                        {compare.map((el: any) => {
                            return (
                                <div className="compare-table__body_item" key={el.id}>
                                    {el.enginePower}
                                </div>
                            );
                        })}
                    </div>
                </div>
                <div className="compare-table__block">
                    <div className="compare-table__header">
                        Пробег на одном заряде:
                    </div>
                    <div className="compare-table__body">
                        {compare.map((el: any) => {
                            return (
                                <div className="compare-table__body_item" key={el.id}>
                                    {el.mileage}
                                </div>
                            );
                        })}
                    </div>
                </div>
                <div className="compare-table__block">
                    <div className="compare-table__header">
                        Тип переднего тормоза:
                    </div>
                    <div className="compare-table__body">
                        {compare.map((el: any) => {
                            return (
                                <div className="compare-table__body_item" key={el.id}>
                                    {el.frontBrake}
                                </div>
                            );
                        })}
                    </div>
                </div>
                <div className="compare-table__block">
                    <div className="compare-table__header">Круиз-контроль:</div>
                    <div className="compare-table__body">
                        {compare.map((el: any) => {
                            return (
                                <div className="compare-table__body_item" key={el.id}>
                                    {el.cruiseControl}
                                </div>
                            );
                        })}
                    </div>
                </div>
                <div className="compare-table__block">
                    <div className="compare-table__header">
                        Подушка безопасности:
                    </div>
                    <div className="compare-table__body">
                        {compare.map((el: any) => {
                            return (
                                <div className="compare-table__body_item" key={el.id}>
                                    {el.airbag}
                                </div>
                            );
                        })}
                    </div>
                </div>
                <div className="compare-table__block">
                    <div className="compare-table__header">
                        Система помощи при парковке:
                    </div>
                    <div className="compare-table__body">
                        {compare.map((el: any) => {
                            return (
                                <div className="compare-table__body_item" key={el.id}>
                                    {el.parkingAssistance}
                                </div>
                            );
                        })}
                    </div>
                </div>
                <div className="compare-table__block">
                    <div className="compare-table__header">
                        Навигационная система:
                    </div>
                    <div className="compare-table__body">
                        {compare.map((el: any) => {
                            return (
                                <div className="compare-table__body_item" key={el.id}>
                                    {el.navigationSystem}
                                </div>
                            );
                        })}
                    </div>
                </div>
                <div className="compare-table__block">
                    <div className="compare-table__header">
                        Противотуманные фары:
                    </div>
                    <div className="compare-table__body">
                        {compare.map((el: any) => {
                            return (
                                <div className="compare-table__body_item" key={el.id}>
                                    {el.fogLight}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </>
    );
}

export default CompareTable;
"use client"
import React from "react"
import { useCompare } from "@/store"

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
                                    <div className="compare-table__body_item">
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
                                <div className="compare-table__body_item">
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
                                <div className="compare-table__body_item">
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
                                <div className="compare-table__body_item">
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
                                <div className="compare-table__body_item">
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
                                <div className="compare-table__body_item">
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
                                <div className="compare-table__body_item">
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
                                <div className="compare-table__body_item">
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
                                <div className="compare-table__body_item">
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
                                <div className="compare-table__body_item">
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
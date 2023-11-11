import { Card, Flex, Typography } from 'antd';
import React from 'react';

import "../../css/cardInfoStyle.css"


export default function PersonalCardInfo(props) {
  const data = props.data
    return (
        <div className='cardInfo'>
            <Card
                className='cardStyle'
                hoverable
                bodyStyle={{
                    padding: 0,
                    overflow: 'hidden',
                }}
            >
                <Flex>
                    <img
                        className='personalImage'
                        alt="avatar"
                        src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                    />
                    <Flex className='content'
                        vertical
                        align="flex-start"
                    >
                        <Typography.Title>
                            THÔNG TIN CÁ NHÂN
                        </Typography.Title>
                        <Typography.Paragraph className='item-content'>Mã số sinh viên: {data.studentID} </Typography.Paragraph>
                        <Typography.Paragraph className='item-content'>Họ và tên: {data.studentName} </Typography.Paragraph>
                        <Typography.Paragraph className='item-content'>Ngày tháng năm sinh: {data.dateOfBirth} </Typography.Paragraph>
                        <Typography.Paragraph className='item-content'>Chuyên ngành chính: {data.major} </Typography.Paragraph>
                    </Flex>
                </Flex>
            </Card>
        </div>
    );
}
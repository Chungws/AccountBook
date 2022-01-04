import React from 'react';
import styled from 'styled-components';
import { Box, Card, List, ListItem, Chip } from '@mui/material';

const SummaryContainer = styled.div`
  width: inherit;
  height: inherit;
  display: flex;
  flex-direction: column;
  align-content: inherit;
  justify-content: flex-start;
`;

const UpperBox = styled(Box)`
  width: 100%;
  min-height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #176DE6;
`;

const LowerBox = styled(Box)`
  width: 100%; 
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.05);
  color: black;
`;

const TextBox = styled(Box)`
  width: 700px;
  padding: 8px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

const AccountCard = styled(Card)`
  width: 700px;
  height: 100px;
  padding: 8px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

const CardList = styled(List)`
  width: 700px;
  padding-top: 0px;
  position: relative;
  overflow: auto;
`;

const CardListContainer = styled.div`
  width: 700px;
  padding: 8px;
  padding-top: 0px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

const ChipBox = styled.div`
  width: 700px;
  display: flex;
  margin-top: 4px;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`

function SummaryPage() {
  return(
    <SummaryContainer>
      <UpperBox>
        <ChipBox>
          <Chip style={{ color : 'white', marginLeft : 8 }} label="계좌 연결" variant="outlined"/>
          <Chip style={{ color : 'white', marginLeft : 8 }} label="입출금 내역" variant="outlined"/>
        </ChipBox>
        <TextBox style={{color : 'white'}}>
          <h3 style={{marginLeft : 8, marginTop : 0 }}>계좌 총 잔액</h3>
          <h1 style={{marginLeft : 8}}>1,375 원</h1>
        </TextBox>
      </UpperBox>
      <LowerBox>
        <TextBox style={{color : 'black', height : 50, marginTop : 8 }}>
          <h3 style={{marginLeft : 8}}>계좌별 잔액</h3>
        </TextBox>
        <CardListContainer>
          <CardList>
            <ListItem sx={{ paddingLeft : 0, paddingRight : 0}}>
              <AccountCard>
                <h3>우리은행 1002-940-223607</h3>
                <h1>1,234 원</h1>
              </AccountCard>
            </ListItem>
            <ListItem sx={{ paddingLeft : 0, paddingRight : 0}}>
              <AccountCard>
                <h3>우리은행 1002-940-223607</h3>
                <h1>1,234 원</h1>
              </AccountCard>
            </ListItem>
            <ListItem sx={{ paddingLeft : 0, paddingRight : 0}}>
              <AccountCard>
                <h3>우리은행 1002-940-223607</h3>
                <h1>1,234 원</h1>
              </AccountCard>
            </ListItem>
            <ListItem sx={{ paddingLeft : 0, paddingRight : 0}}>
              <AccountCard>
                <h3>우리은행 1002-940-223607</h3>
                <h1>1,234 원</h1>
              </AccountCard>
            </ListItem>
          </CardList>
        </CardListContainer>
      </LowerBox>
    </SummaryContainer>
  )
}

export default SummaryPage;
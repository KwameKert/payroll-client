import { Component, OnInit } from '@angular/core';

export interface NFT {
  name: string;
  status: string;
  owner: string;
  floorPrice: number;
  wallet: string;
  volumeTraded: number;
}

const NTFList: NFT[] = [
  {
    name: 'Crypto Mug',
    status: 'active',
    owner: 'Kwame',
    floorPrice: 12.3,
    wallet: '0xs234234ds',
    volumeTraded: 23.2,
  },
  {
    name: 'Metaverse Desk',
    status: 'active',
    owner: 'Kwame',
    floorPrice: 32.3,
    wallet: '0xs234234ds',
    volumeTraded: 23.2,
  },
  {
    name: 'CGI Moon ',
    status: 'active',
    owner: 'Kwame',
    floorPrice: 32.3,
    wallet: '0xs234234ds',
    volumeTraded: 23.2,
  },
  {
    name: 'CGI Moon ',
    status: 'active',
    owner: 'Kwame',
    floorPrice: 32.3,
    wallet: '0xs234234ds',
    volumeTraded: 23.2,
  },
  {
    name: 'CGI Moon ',
    status: 'active',
    owner: 'Kwame',
    floorPrice: 32.3,
    wallet: '0xs234234ds',
    volumeTraded: 23.2,
  },
  {
    name: 'CGI Moon ',
    status: 'active',
    owner: 'Kwame',
    floorPrice: 32.3,
    wallet: '0xs234234ds',
    volumeTraded: 23.2,
  },
  {
    name: 'CGI Moon ',
    status: 'active',
    owner: 'Kwame',
    floorPrice: 32.3,
    wallet: '0xs234234ds',
    volumeTraded: 23.2,
  },
];
@Component({
  selector: 'app-listings',
  templateUrl: './listings.component.html',
  styleUrls: ['./listings.component.scss'],
})
export class ListingsComponent implements OnInit {
  displayedColumns: string[] = [
    'name',
    'status',
    'owner',
    'floor price',
    'wallet',
    'volume traded',
  ];
  dataSource = NTFList;
  constructor() {}

  ngOnInit(): void {}
}

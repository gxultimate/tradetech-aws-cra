import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';
import {inject,observer} from 'mobx-react'
import {
	ReactiveBase,
	DateRange,
	ResultCard,
	SelectedFilters,
	ReactiveList,
} from '@appbaseio/reactivesearch';

// import './index.css';

class Main extends Component {

    componentDidMount(){
        let {acountingStore:{getOrder,getAccounts}}=this.props;
        getOrder();
        getAccounts();
      }


	dateQuery(value) {
		let query = null;
		if (value) {
			query = [
				{
					range: {
						date_from: {
							gte: moment(value.start).format('YYYYMMDD'),
						},
					},
				},
				{
					range: {
						date_to: {
							lte: moment(value.end).format('YYYYMMDD'),
						},
					},
				},
			];
		}
		return query ? { query: { bool: { must: query } } } : null;
	}

	render() {
        let {acountingStore:{listOfOrder,listOfUsers}}=this.props;
		return (
			<ReactiveBase
				app="airbeds-test-app"
				url={listOfOrder}
				enableAppbase
				type="listing"
			>
				<div className="row">
					<div className="col">
						<DateRange
							componentId="DateSensor"
							dataField="date_from"
							customQuery={this.dateQuery}
							initialMonth={new Date('2020-05-05')}
						/>
					</div>

					<div className="col">
						<SelectedFilters />
						<ReactiveList
							componentId="SearchResult"
							dataField="name"
							from={0}
							size={40}
							showPagination
							react={{
								and: ['DateSensor'],
							}}
							render={({ data }) => (
								<ReactiveList.ResultCardsWrapper>
									{data.map(item => (
										<ResultCard href={item.listing_url} key={item.id}>
											<ResultCard.Image src={item.image} />
											<ResultCard.Title>
												<div
													className="book-title"
													dangerouslySetInnerHTML={{
														__html: item.name,
													}}
												/>
											</ResultCard.Title>

											<ResultCard.Description>
												<div>
													<div>${item.price}</div>
													<span
														style={{
															backgroundImage: `url(${
																item.host_image
															})`,
														}}
													/>
													<p>
														{item.room_type} · {item.accommodates}{' '}
														guests
													</p>
												</div>
											</ResultCard.Description>
										</ResultCard>
									))}
								</ReactiveList.ResultCardsWrapper>
							)}
						/>
					</div>
				</div>
			</ReactiveBase>
		);
	}
}
export default inject('acountingStore')(observer(Main))
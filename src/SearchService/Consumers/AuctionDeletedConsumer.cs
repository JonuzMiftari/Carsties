using Contracts;
using MassTransit;
using MongoDB.Entities;
using SearchService.Models;

namespace SearchService.Consumers
{
    public class AuctionDeletedConsumer : IConsumer<AuctionDeleted>
    {
        public async Task Consume(ConsumeContext<AuctionDeleted> context)
        {
            var auctionId = context.Message.Id;

            Console.WriteLine($"--> 🌹 Consuming AuctionDeleted: {auctionId}");

            var result = await DB.DeleteAsync<Item>(auctionId);

            if (!result.IsAcknowledged)
                throw new MessageException(typeof(AuctionDeleted), "Problem deleting auction");

        }
    }
}

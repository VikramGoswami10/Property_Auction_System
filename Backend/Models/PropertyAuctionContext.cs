using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace Backend.Models;

public partial class PropertyAuctionContext : DbContext
{
    public PropertyAuctionContext()
    {
    }

    public PropertyAuctionContext(DbContextOptions<PropertyAuctionContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Admin> Admins { get; set; }

    public virtual DbSet<Auction> Auctions { get; set; }

    public virtual DbSet<BiddingHistory> BiddingHistories { get; set; }

    public virtual DbSet<Buyer> Buyers { get; set; }

    public virtual DbSet<Category> Categories { get; set; }

    public virtual DbSet<Payment> Payments { get; set; }

    public virtual DbSet<Property> Properties { get; set; }

    public virtual DbSet<Seller> Sellers { get; set; }

    public virtual DbSet<Userinfo> Userinfos { get; set; }


    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see https://go.microsoft.com/fwlink/?LinkId=723263.
        => optionsBuilder.UseSqlServer("Data Source=(localdb)\\MSSQLLocalDB;Initial Catalog=PropertyAuction;Integrated Security=True");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Auction>()
           .HasOne(a => a.Property)
           .WithMany()
           .HasForeignKey(a => a.PropertyId)
           .OnDelete(DeleteBehavior.Cascade);

        modelBuilder.Entity<Admin>(entity =>
        {
            entity.HasKey(e => e.AdminId).HasName("PK__Admin__43AB7D298E237578");

            entity.ToTable("Admin");

            entity.HasIndex(e => e.Email, "UQ__Admin__AB6E616442C6EACD").IsUnique();

            entity.HasIndex(e => e.UId, "UQ__Admin__B50210331FB8C934").IsUnique();

            entity.Property(e => e.AdminId).HasColumnName("admin_Id");
            entity.Property(e => e.Email)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("email");
            entity.Property(e => e.Name)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("name");
            entity.Property(e => e.UId).HasColumnName("u_Id");

            entity.HasOne(d => d.UIdNavigation).WithOne(p => p.Admin)
                .HasForeignKey<Admin>(d => d.UId)
                .HasConstraintName("FK__Admin__u_Id__00200768");
        });

        modelBuilder.Entity<Auction>(entity =>
        {
            entity.HasKey(e => e.AuctionId).HasName("PK__Auction__2FF09A6861147AC4");

            entity.ToTable("Auction");

            entity.Property(e => e.AuctionId).HasColumnName("auction_Id");
            entity.Property(e => e.EndTime).HasColumnName("end_time");
            entity.Property(e => e.PropertyId).HasColumnName("property_id");
            entity.Property(e => e.StartTime).HasColumnName("start_time");
            entity.Property(e => e.Status)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("status");

            entity.HasOne(d => d.Property).WithMany(p => p.Auctions)
                .HasForeignKey(d => d.PropertyId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK__Auction__propert__31EC6D26");
        });

        modelBuilder.Entity<BiddingHistory>(entity =>
        {
            entity.HasKey(e => e.BiddinghistoryId).HasName("PK__tmp_ms_x__6D5E8BA8D4654213");

            entity.ToTable("Bidding_History");

            entity.Property(e => e.BiddinghistoryId).HasColumnName("biddinghistory_Id");
            entity.Property(e => e.AuctionId).HasColumnName("auction_id");
            entity.Property(e => e.BidAmount).HasColumnName("bid_amount");
            entity.Property(e => e.BuyerId).HasColumnName("buyer_id");
            entity.Property(e => e.Time).HasColumnName("time");

            entity.HasOne(d => d.Auction).WithMany(p => p.BiddingHistories)
                .HasForeignKey(d => d.AuctionId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK__Bidding_H__aucti__3A81B327");
        });

        modelBuilder.Entity<Buyer>(entity =>
        {
            entity.HasKey(e => e.BuyerId).HasName("PK__Buyer__BA03303AC2EBCDC9");

            entity.ToTable("Buyer");

            entity.HasIndex(e => e.Email, "UQ__Buyer__AB6E6164E75E7127").IsUnique();

            entity.HasIndex(e => e.UId, "UQ__Buyer__B5021033ACAB0CEB").IsUnique();

            entity.Property(e => e.BuyerId).HasColumnName("buyer_Id");
            entity.Property(e => e.Email)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("email");
            entity.Property(e => e.Name)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("name");
            entity.Property(e => e.UId).HasColumnName("u_Id");

            entity.HasOne(d => d.UIdNavigation).WithOne(p => p.Buyer)
                .HasForeignKey<Buyer>(d => d.UId)
                .HasConstraintName("FK__Buyer__u_Id__76969D2E");
        });

        modelBuilder.Entity<Category>(entity =>
        {
            entity.HasKey(e => e.CategoryId).HasName("PK__Category__D5B1EDCC79895FD5");

            entity.ToTable("Category");

            entity.Property(e => e.CategoryId).HasColumnName("category_Id");
            entity.Property(e => e.Name)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("name");
        });

        modelBuilder.Entity<Payment>(entity =>
        {
            entity.HasKey(e => e.PaymentId).HasName("PK__Payment__ED10C462CC342845");

            entity.ToTable("Payment");

            entity.Property(e => e.PaymentId).HasColumnName("payment_Id");
            entity.Property(e => e.AuctionId).HasColumnName("auction_id");
            entity.Property(e => e.BuyerId).HasColumnName("buyer_id");
            entity.Property(e => e.PaymentAmount).HasColumnName("payment_amount");
            entity.Property(e => e.PaymentDate)
                .HasColumnType("datetime")
                .HasColumnName("payment_date");
            entity.Property(e => e.PaymentMethod)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("payment_method");

            entity.HasOne(d => d.Auction).WithMany(p => p.Payments)
                .HasForeignKey(d => d.AuctionId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK__Payment__auction__3C69FB99");
        });

        modelBuilder.Entity<Property>(entity =>
        {
            entity.HasKey(e => e.PropertyId).HasName("PK__Property__735CA04BA3E7BA9F");

            entity.ToTable("Property");

            entity.Property(e => e.PropertyId).HasColumnName("property_Id");
            entity.Property(e => e.Address)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("address");
            entity.Property(e => e.CategoryId).HasColumnName("category_id");
            entity.Property(e => e.Description)
                .HasMaxLength(100)
                .IsUnicode(false)
                .HasColumnName("description");
            entity.Property(e => e.Image)
                .HasColumnType("image")
                .HasColumnName("image");
            entity.Property(e => e.SellerId).HasColumnName("seller_id");
            entity.Property(e => e.Title)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("title");

            entity.HasOne(d => d.Category).WithMany(p => p.Properties)
                .HasForeignKey(d => d.CategoryId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK__Property__catego__2F10007B");
        });

        modelBuilder.Entity<Seller>(entity =>
        {
            entity.HasKey(e => e.SellerId).HasName("PK__Seller__7812E54F90B5F26D");

            entity.ToTable("Seller");

            entity.HasIndex(e => e.Email, "UQ__Seller__AB6E6164D5D6F824").IsUnique();

            entity.HasIndex(e => e.UId, "UQ__Seller__B50210335A7D8DFF").IsUnique();

            entity.Property(e => e.SellerId).HasColumnName("seller_Id");
            entity.Property(e => e.Email)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("email");
            entity.Property(e => e.Name)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("name");
            entity.Property(e => e.UId).HasColumnName("u_Id");

            entity.HasOne(d => d.UIdNavigation).WithOne(p => p.Seller)
                .HasForeignKey<Seller>(d => d.UId)
                .HasConstraintName("FK__Seller__u_Id__7B5B524B");
        });

        modelBuilder.Entity<Userinfo>(entity =>
        {
            entity.HasKey(e => e.UId).HasName("PK__Userinfo__B502103253C1F4ED");

            entity.ToTable("Userinfo");

            entity.HasIndex(e => e.Email, "UQ__Userinfo__AB6E616443DB0A98").IsUnique();

            entity.Property(e => e.UId).HasColumnName("u_Id");
            entity.Property(e => e.Email)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("email");
            entity.Property(e => e.Name)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("name");
            entity.Property(e => e.Password)
                .HasMaxLength(255)
                .IsUnicode(false)
                .HasColumnName("password");
            entity.Property(e => e.Role)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasDefaultValue("buyer")
                .HasColumnName("role");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
